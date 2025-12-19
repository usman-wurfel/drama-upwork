import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import epizonIcon from "@/assets/epizon-icon.png";

const Index = () => {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.epizon.app";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full text-center space-y-8">
          {/* App Icon with Glow Effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 animate-glow rounded-full"></div>
            <img 
              src={epizonIcon} 
              alt="Epizon App Icon" 
              className="relative w-32 h-32 md:w-40 md:h-40 mx-auto animate-float rounded-3xl shadow-2xl"
            />
          </div>

          {/* App Name */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Epizon
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Your Ultimate Short Drama Entertainment
            </p>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground">
              Discover endless entertainment with captivating short dramas. 
              Watch engaging stories anytime, anywhere.
            </p>
          </div>

          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6 bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg hover:shadow-primary/50"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download on Play Store
              </Button>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-lg font-semibold mb-2">Short Dramas</h3>
              <p className="text-sm text-muted-foreground">
                Engaging stories in bite-sized episodes
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-lg font-semibold mb-2">Watch Anywhere</h3>
              <p className="text-sm text-muted-foreground">
                Stream seamlessly on any device
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Fast & Easy</h3>
              <p className="text-sm text-muted-foreground">
                Quick loading and user-friendly interface
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Epizon. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/privacy-policy" 
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
