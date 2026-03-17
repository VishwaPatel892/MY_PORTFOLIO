import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 text-center">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
                    © {new Date().getFullYear()} Portfolio. Made with <Heart className="h-4 w-4 text-pink-500 mx-2 animate-pulse" /> by Vishwa
                </p>
            </div>
        </footer>
    );
};

export default Footer;
