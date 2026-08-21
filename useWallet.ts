'use client';

/**
 * Central wallet management hook.
 * Wraps Freighter API with React state, auto-refresh, and typed errors.
 */
import { useState, useEffect, useCallback, useContext, createContext } from 'react';
import {
  connectWallet,
  getWalletState,
  validateNetwork,
  isFreighterInstalled,
  signTransaction as freighterSignTx,
} from '@/lib/freighter';
import { getXlmBalance } from '@/lib/stellar';
import { parseError, type AppError } from '@/lib/errors';

export interface WalletContextValue {
  publicKey: string | null;
  isConnected: boolean;
  network: string | null;
  balance: string | null;
  balanceXlm: string | null;
  isLoading: boolean;
  error: AppError | null;
  isFreighterInstalled: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  refreshBalance: () => Promise<void>;
  clearError: () => void;
  signTransaction: (xdr: string, networkPassphrase?: string) => Promise<string>;
}

export const WalletContext = createContext<WalletContextValue | null>(null);

/** Hook to access wallet state from any component. */
export function useWallet(): WalletContextValue {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error('useWallet must be used within WalletProvider');
  return ctx;
}

/** Build the wallet state value (used in WalletProvider). */
export function useWalletState(): WalletContextValue {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [network, setNetwork] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AppError | null>(null);
  const [freighterAvailable, setFreighterAvailable] = useState(false);

  const refreshBalance = useCallback(async () => {
    if (!publicKey) return;
    try {
      const bal = await getXlmBalance(publicKey);
      setBalance(bal);
    } catch (err) {
      console.warn('Balance refresh failed:', err);
    }
  }, [publicKey]);

  const checkState = useCallback(async () => {
    const installed = await isFreighterInstalled();
    setFreighterAvailable(installed);
    if (!installed) return;

    const state = await getWalletState();
    setPublicKey(state.publicKey);
    setIsConnected(state.isConnected);
    setNetwork(state.network);

    if (state.publicKey) {
      const bal = await getXlmBalance(state.publicKey);
      setBalance(bal);
    }
  }, []);

  useEffect(() => {
    checkState();
    const interval = setInterval(checkState, 30000);
    return () => clearInterval(interval);
  }, [checkState]);

  const connect = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const pk = await connectWallet();
      await validateNetwork('TESTNET');
      setPublicKey(pk);
      setIsConnected(true);
      setNetwork('TESTNET');
      await refreshBalance();
    } catch (err) {
      setError(parseError(err));
    } finally {
      setIsLoading(false);
    }
  };

  const disconnect = () => {
    setPublicKey(null);
    setIsConnected(false);
    setNetwork(null);
    setBalance(null);
  };

  const clearError = () => setError(null);

  const signTransaction = async (xdr: string, networkPassphrase?: string): Promise<string> => {
    return freighterSignTx(xdr, networkPassphrase);
  };

  return {
    publicKey,
    isConnected,
    network,
    balance,
    balanceXlm: balance,
    isLoading,
    error,
    isFreighterInstalled: freighterAvailable,
    connect,
    disconnect,
    refreshBalance,
    clearError,
    signTransaction,
  };
}
