import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '15000+', label: 'Returns Filed' },
    { icon: Award, value: '99.9%', label: 'Success Rate' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
