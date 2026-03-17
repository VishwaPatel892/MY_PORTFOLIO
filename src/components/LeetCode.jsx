import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Trophy, Target, Zap } from 'lucide-react';

const LeetCode = () => {
    const [stats, setStats] = useState({
        totalSolved: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        ranking: "Loading...",
        acceptance: "0%",
        submissionCalendar: {}
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/vishwa0102');
                const data = await response.json();
                
                if (data && data.totalSolved !== undefined) {
                    let acceptanceRate = "0";
                    const acStats = data.matchedUserStats?.acSubmissionNum?.find(item => item.difficulty === "All");
                    const totalStats = data.matchedUserStats?.totalSubmissionNum?.find(item => item.difficulty === "All");
                    
                    if (acStats?.submissions && totalStats?.submissions) {
                        if (totalStats.submissions > 0) {
                            acceptanceRate = ((acStats.submissions / totalStats.submissions) * 100).toFixed(2);
                        }
                    }

                    setStats({
                        totalSolved: data.totalSolved,
                        easy: data.easySolved,
                        medium: data.mediumSolved,
                        hard: data.hardSolved,
                        ranking: data.ranking,
                        acceptance: `${acceptanceRate}%`,
                        submissionCalendar: data.submissionCalendar
                    });
                }
            } catch (error) {
                console.error("Failed to fetch LeetCode stats", error);
                // Fallback or keep initial state
                setStats(prev => ({ ...prev, ranking: "N/A" }));
            }
        };

        fetchStats();
    }, []);

    return (
        <section id="leetcode" className="py-20 px-4 md:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-pink-600 dark:text-[#F472B6] font-semibold tracking-widest uppercase text-sm">Problem Solving</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white flex items-center justify-center gap-3">
                        Live LeetCode <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 dark:from-[#F472B6] dark:to-[#A855F7]">Active Solve</span>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
                        Consistently sharpening my algorithmic skills and data structure knowledge.
                    </p>
                </div>

                <div className="flex justify-center flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(168,85,247,0.2)" }}
                        className="w-full max-w-4xl bg-white/80 dark:bg-[#1a1025]/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-[0_0_50px_rgba(168,85,247,0.1)] relative overflow-hidden"
                    >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            {/* Left Side: Main Stats */}
                            <div className="space-y-8">
                                <div className="flex items-center space-x-4">
                                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#2a1b3d] border border-gray-100 dark:border-white/5">
                                        <Trophy className="h-10 w-10 text-pink-500 dark:text-[#F472B6]" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stats.ranking}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Global Ranking</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#2a1b3d] border border-gray-100 dark:border-white/5">
                                        <Target className="h-10 w-10 text-purple-500 dark:text-[#A855F7]" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stats.totalSolved}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Problems Solved</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="p-4 rounded-2xl bg-gray-50 dark:bg-[#2a1b3d] border border-gray-100 dark:border-white/5">
                                        <Zap className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{stats.acceptance}</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">Acceptance Rate</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Problem Breakdown */}
                            <div className="bg-gray-50/50 dark:bg-[#0B0212]/50 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                                <h4 className="text-gray-900 dark:text-white font-semibold mb-6 flex items-center">
                                    <span className="w-2 h-6 bg-gradient-to-b from-pink-500 to-purple-600 dark:from-[#F472B6] dark:to-[#A855F7] rounded-full mr-3"></span>
                                    Difficulty Breakdown
                                </h4>

                                <div className="space-y-6">
                                    {/* Easy */}
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-green-500 dark:text-green-400 font-medium">Easy</span>
                                            <span className="text-gray-900 dark:text-white font-bold">{stats.easy}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(stats.easy / stats.totalSolved) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.2 }}
                                                className="bg-green-500 dark:bg-green-400 h-2 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"
                                            ></motion.div>
                                        </div>
                                    </div>

                                    {/* Medium */}
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-yellow-500 dark:text-yellow-400 font-medium">Medium</span>
                                            <span className="text-gray-900 dark:text-white font-bold">{stats.medium}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(stats.medium / stats.totalSolved) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.4 }}
                                                className="bg-yellow-500 dark:bg-yellow-400 h-2 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                                            ></motion.div>
                                        </div>
                                    </div>

                                    {/* Hard */}
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-red-500 dark:text-red-400 font-medium">Hard</span>
                                            <span className="text-gray-900 dark:text-white font-bold">{stats.hard}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(stats.hard / stats.totalSolved) * 100}%` }}
                                                transition={{ duration: 1, delay: 0.6 }}
                                                className="bg-red-500 dark:bg-red-400 h-2 rounded-full shadow-[0_0_10px_rgba(248,113,113,0.5)]"
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 text-center">
                                    <a
                                        href="https://leetcode.com/u/vishwa0102/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-pink-600 dark:text-[#F472B6] hover:text-gray-900 dark:hover:text-white transition-colors font-medium group"
                                    >
                                        View Full Profile
                                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Heatmap Contribution */}
                        <SubmissionHeatmap submissionCalendar={stats.submissionCalendar} />

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SubmissionHeatmap = ({ submissionCalendar }) => {
    // Parse the submission calendar (epoch string -> count)
    // API returns a JSON string, but initial state is an object
    let calendarData = {};
    try {
        if (typeof submissionCalendar === 'string') {
            calendarData = JSON.parse(submissionCalendar);
        } else if (typeof submissionCalendar === 'object' && submissionCalendar !== null) {
            calendarData = submissionCalendar;
        }
    } catch (e) {
        console.error("Failed to parse calendar data", e);
    }

    // Generate dates for the last 6 months (approx 180 days)
    const generateDates = () => {
        const dates = [];
        const today = new Date();
        // Start from 6 months ago
        const startDate = new Date();
        startDate.setMonth(today.getMonth() - 5); // 5 months back + current month
        startDate.setDate(1); // Start from first of the month

        // Normalize to start of day
        for (let d = new Date(startDate); d <= today; d.setDate(d.getDate() + 1)) {
            // Create a normalized timestamp for comparison (start of day)
            const normalizedDate = new Date(d);
            normalizedDate.setHours(0, 0, 0, 0);

            // Convert to unix timestamp for lookup (seconds) - handling timezone offset carefully
            // The API returns timestamps in seconds. We need to match day boundaries.
            // A simpler approach for the heatmap is just checking the count for the date string if we had it, but we have timestamps.

            // Actually, let's just use the timestamp from the API. The API timestamps are usually noon or start of day UTC.
            // Let's iterate and find matches.

            dates.push(new Date(d));
        }
        return dates;
    };

    const dates = generateDates();

    // Helper to get count for a specific date
    const getCountForDate = (date) => {
        // This is a bit tricky with timezones. 
        // We'll look for any timestamp in calendarData that falls within this date's 24hr window in local time?
        // Or simpler: convert calendarData keys to Date strings and look up.

        const dateString = date.toISOString().split('T')[0];

        // Convert API data keys to ISO strings for easier lookup (doing this once would be better performance-wise but this is fine for small data)
        for (const [timestamp, count] of Object.entries(calendarData)) {
            const dateFromTs = new Date(parseInt(timestamp) * 1000);
            if (dateFromTs.toISOString().split('T')[0] === dateString) {
                return count;
            }
        }
        return 0;
    };

    const getColor = (count) => {
        if (count === 0) return 'bg-gray-200 dark:bg-gray-800';
        if (count <= 2) return 'bg-green-200 dark:bg-green-900';
        if (count <= 4) return 'bg-green-400 dark:bg-green-700';
        return 'bg-green-600 dark:bg-green-500';
    };

    return (
        <div className="mt-8 flex flex-col items-center w-full">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4 text-center">Submission Activity (Last 6 Months)</h4>
            <div className="flex flex-wrap gap-1 justify-center max-w-2xl">
                {dates.map((date, index) => {
                    const count = getCountForDate(date);
                    return (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-sm ${getColor(count)} cursor-pointer transition-colors duration-200 relative group`}
                        >
                            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                {date.toLocaleDateString()} : {count} submissions
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                <span>Less</span>
                <div className="w-3 h-3 rounded-sm bg-gray-200 dark:bg-gray-800"></div>
                <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900"></div>
                <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700"></div>
                <div className="w-3 h-3 rounded-sm bg-green-600 dark:bg-green-500"></div>
                <span>More</span>
            </div>
        </div>
    );
};

export default LeetCode;
