import { FormattedMessage } from "react-intl";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            <FormattedMessage id="pricing.title" />
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-4">
            <FormattedMessage id="pricing.subtitle" />
          </p>
          <p className="text-base text-[#00C4B3] font-semibold">
            <FormattedMessage id="pricing.intro" />
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-[#00C4B3]/30 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#00C4B3] mb-2">
                <FormattedMessage id="pricing.tjm.title" />
              </h3>
              <p className="text-slate-400 text-sm">
                <FormattedMessage id="pricing.tjm.subtitle" />
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#00C4B3] rounded-full mr-3"></span>
                <FormattedMessage id="pricing.tjm.feature1" />
              </div>
              <div className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#00C4B3] rounded-full mr-3"></span>
                <FormattedMessage id="pricing.tjm.feature2" />
              </div>
              <div className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#00C4B3] rounded-full mr-3"></span>
                <FormattedMessage id="pricing.tjm.feature3" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-400 mb-2">
                <FormattedMessage id="pricing.tjm.rateLabel" />
              </p>
              <p className="text-lg font-semibold text-slate-200">
                <FormattedMessage id="pricing.tjm.rate" />
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#00C4B3]/10 via-slate-800/50 to-[#00C4B3]/5 backdrop-blur-sm border border-[#00C4B3]/50 rounded-xl p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00C4B3] text-[#1A1A1A] px-4 py-1 rounded-full text-sm font-semibold">
              <FormattedMessage id="pricing.project.popular" />
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#00C4B3] mb-2">
                <FormattedMessage id="pricing.project.title" />
              </h3>
              <p className="text-slate-400 text-sm">
                <FormattedMessage id="pricing.project.subtitle" />
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="border-b border-slate-700 pb-4">
                <div className="flex justify-between items-center text-slate-300 mb-2">
                  <span className="font-medium">
                    <FormattedMessage id="pricing.project.example1.name" />
                  </span>
                  <span className="text-[#00C4B3] font-semibold">
                    <FormattedMessage id="pricing.project.example1.price" />
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  <FormattedMessage id="pricing.project.example1.description" />
                </p>
              </div>
              <div className="border-b border-slate-700 pb-4">
                <div className="flex justify-between items-center text-slate-300 mb-2">
                  <span className="font-medium">
                    <FormattedMessage id="pricing.project.example2.name" />
                  </span>
                  <span className="text-[#00C4B3] font-semibold">
                    <FormattedMessage id="pricing.project.example2.price" />
                  </span>
                </div>
                <p className="text-sm text-slate-400">
                  <FormattedMessage id="pricing.project.example2.description" />
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 via-slate-700/30 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-[#00C4B3]/30 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#00C4B3] mb-2">
                <FormattedMessage id="pricing.maintenance.title" />
              </h3>
              <p className="text-slate-400 text-sm">
                <FormattedMessage id="pricing.maintenance.subtitle" />
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#00C4B3] rounded-full mr-3"></span>
                <FormattedMessage id="pricing.maintenance.feature1" />
              </div>
              <div className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#00C4B3] rounded-full mr-3"></span>
                <FormattedMessage id="pricing.maintenance.feature2" />
              </div>
              <div className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#00C4B3] rounded-full mr-3"></span>
                <FormattedMessage id="pricing.maintenance.feature3" />
              </div>
              <div className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#00C4B3] rounded-full mr-3"></span>
                <FormattedMessage id="pricing.maintenance.feature4" />
              </div>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-200">
                <FormattedMessage id="pricing.maintenance.rate" />
              </p>
              <p className="text-sm text-slate-400 mt-1">
                <FormattedMessage id="pricing.maintenance.rateNote" />
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 bg-gradient-to-r from-slate-800/30 via-slate-700/20 to-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
          <h3 className="text-2xl font-bold text-slate-100 mb-3">
            <FormattedMessage id="pricing.cta.text" />
          </h3>
          <p className="text-slate-400 mb-6">
            <FormattedMessage id="pricing.cta.subtitle" />
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center bg-[#00C4B3] text-[#1A1A1A] font-bold py-4 px-8 rounded-lg hover:bg-[#00C4B3]/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <FormattedMessage id="pricing.cta.button" />
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;