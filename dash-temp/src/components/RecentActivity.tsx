

export const RecentActivity = () => {
  const transactions = [
    { id: 1, type: 'Buy', asset: 'BTC', qty: '0.02', price: '$64,120', time: '14:20:05' },
    { id: 2, type: 'Sell', asset: 'TSLA', qty: '10', price: '$175.40', time: '13:45:12' },
    { id: 3, type: 'Buy', asset: 'ETH', qty: '1.5', price: '$3,450', time: '12:10:30' },
  ];

  return (
    /* Glassmorphism container with padding and shadow [cite: 11, 13] */
    <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl p-6 shadow-lg">
      <h3 className="text-white/60 text-sm mb-4 font-medium uppercase tracking-wider">
        Recent Trade Executions [cite: 24]
      </h3>
      
      {/* Scroll container for narrow/Compact Mode views  */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-white/10 text-white/40 text-[10px] uppercase font-bold">
              <th className="pb-3 px-2">Asset [cite: 25]</th>
              <th className="pb-3 px-2">Type [cite: 25]</th>
              <th className="pb-3 px-2">Quantity [cite: 25]</th>
              <th className="pb-3 px-2">Price [cite: 25]</th>
              <th className="pb-3 px-2 text-right">Timestamp [cite: 25]</th>
            </tr>
          </thead>
          
          {/* Pure White (#FFFFFF) text for high contrast on translucent background [cite: 26, 41] */}
          <tbody className="text-white divide-y divide-white/5">
            {transactions.map((tx) => (
              <tr key={tx.id} className="hover:bg-white/5 transition-colors group">
                <td className="py-4 px-2 font-bold">{tx.asset}</td>
                <td className={`py-4 px-2 font-medium ${
                  tx.type === 'Buy' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {tx.type}
                </td>
                <td className="py-4 px-2">{tx.qty}</td>
                <td className="py-4 px-2 font-mono">{tx.price}</td>
                <td className="py-4 px-2 text-right text-white/40 group-hover:text-white/80 transition-colors">
                  {tx.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};