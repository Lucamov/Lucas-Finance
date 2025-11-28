import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Wallet, MessageSquareText } from 'lucide-react';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import Advisor from './components/Advisor';
import { AppTab, Transaction } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    // Load from local storage
    const saved = localStorage.getItem('gemini-finance-data');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('gemini-finance-data', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (t: Transaction) => {
    setTransactions(prev => [t, ...prev]);
  };

  const addMultipleTransactions = (ts: Transaction[]) => {
    setTransactions(prev => [...ts, ...prev]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col lg:flex-row overflow-hidden">
      
      {/* Sidebar Navigation */}
      <nav className="lg:w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col gap-2 shrink-0 z-20">
        <div className="mb-8 px-2 flex items-center gap-3">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-900/20">
            <Wallet className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            Gemini Finance
          </h1>
        </div>

        <button
          onClick={() => setActiveTab(AppTab.DASHBOARD)}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            activeTab === AppTab.DASHBOARD 
              ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20' 
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </button>

        <button
          onClick={() => setActiveTab(AppTab.TRANSACTIONS)}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            activeTab === AppTab.TRANSACTIONS 
              ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20' 
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <Wallet className="w-5 h-5" />
          <span className="font-medium">Transações</span>
        </button>

        <button
          onClick={() => setActiveTab(AppTab.ADVISOR)}
          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
            activeTab === AppTab.ADVISOR 
              ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/20' 
              : 'text-slate-400 hover:bg-slate-800 hover:text-white'
          }`}
        >
          <MessageSquareText className="w-5 h-5" />
          <span className="font-medium">Gemini Advisor</span>
        </button>

        <div className="mt-auto p-4 bg-slate-950/50 rounded-xl border border-slate-800">
          <p className="text-xs text-slate-500 text-center">
            Powered by Google Gemini 2.5 Flash
          </p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 p-4 lg:p-6 overflow-hidden h-screen bg-slate-950 relative">
        <div className="h-full w-full max-w-7xl mx-auto">
          {activeTab === AppTab.DASHBOARD && (
            <Dashboard 
              transactions={transactions} 
              onAddTransaction={addTransaction}
              onAddMultipleTransactions={addMultipleTransactions} 
            />
          )}
          {activeTab === AppTab.TRANSACTIONS && (
            <TransactionList transactions={transactions} onDelete={deleteTransaction} />
          )}
          {activeTab === AppTab.ADVISOR && (
            <Advisor transactions={transactions} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;