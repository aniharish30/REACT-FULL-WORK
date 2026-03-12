import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ReactHookForm = () => {
  const schema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email ad dress" }),
    message: z.string().min(5, { message: "Message must be at least 5 characters" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = async (data) => {
    return new Promise(resolve => setTimeout(() => {
      console.log("Form data submitted:", data);
      resolve();
    }, 1500));
  };

  return (
    <div className="min-h-screen bg-[#060606] flex items-center justify-center p-4 relative overflow-hidden z-20">
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-primary-600/10 rounded-full blur-[120px] pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-float" style={{animationDelay: '2.5s'}}></div>

      <div className="w-full max-w-lg relative z-10 animate-fade-in-up">
        <form
          className="glass-card p-10 sm:p-12 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10 relative overflow-hidden group"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-purple-500 to-blue-500 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-500 text-glow-primary">Touch</span>
            </h1>
            <p className="text-slate-400 text-sm sm:text-base font-medium">We'd love to hear from you. Reach out today.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 relative group/input">
              <label htmlFor="name" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within/input:text-primary-400 transition-colors">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name..."
                  className={`w-full py-3.5 pl-4 pr-10 bg-white/5 border ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary-500'} rounded-xl outline-none focus:ring-1 ${errors.name ? 'focus:ring-red-500' : 'focus:ring-primary-500'} transition-all duration-300 text-white placeholder-slate-500 shadow-inner focus:bg-white/10`}
                  {...register("name")}
                />
                {errors.name && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 animate-fade-in-up">
                    <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                )}
              </div>
              {errors.name?.message && <p className="text-red-400 text-xs pl-1 font-medium animate-fade-in-up">{errors.name?.message}</p>}
            </div>

            <div className="flex flex-col gap-2 relative group/input">
              <label htmlFor="email" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within/input:text-primary-400 transition-colors">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className={`w-full py-3.5 pl-4 pr-10 bg-white/5 border ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary-500'} rounded-xl outline-none focus:ring-1 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-primary-500'} transition-all duration-300 text-white placeholder-slate-500 shadow-inner focus:bg-white/10`}
                  {...register("email")}
                />
                {errors.email && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 animate-fade-in-up">
                    <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                )}
              </div>
              {errors.email?.message && <p className="text-red-400 text-xs pl-1 font-medium animate-fade-in-up">{errors.email?.message}</p>}
            </div>

            <div className="flex flex-col gap-2 relative group/input">
              <label htmlFor="message" className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pl-1 group-focus-within/input:text-primary-400 transition-colors">
                Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="How can we help you?"
                  className={`w-full py-3.5 pl-4 pr-10 bg-white/5 border ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary-500'} rounded-xl outline-none focus:ring-1 ${errors.message ? 'focus:ring-red-500' : 'focus:ring-primary-500'} transition-all duration-300 text-white placeholder-slate-500 shadow-inner resize-none focus:bg-white/10`}
                  {...register("message")}
                />
                {errors.message && (
                  <div className="absolute right-4 top-4 text-red-500 animate-fade-in-up">
                    <svg className="w-5 h-5 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                )}
              </div>
              {errors.message?.message && <p className="text-red-400 text-xs pl-1 font-medium animate-fade-in-up">{errors.message?.message}</p>}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitSuccessful}
                className="relative w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-bold tracking-wide hover:from-primary-500 hover:to-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-1 disabled:opacity-80 disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] overflow-hidden group/btn"
              >
                <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"></div>
                
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </div>
                ) : isSubmitSuccessful ? (
                  <div className="flex items-center justify-center font-bold tracking-wider">
                    <svg className="w-5 h-5 mr-2 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    Message Delivered!
                  </div>
                ) : (
                  <span className="drop-shadow-md">Send Message</span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReactHookForm;