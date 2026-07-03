// Roadmap Data Structure
const ROADMAP_DATA = {
    years: {
        "1": {
            title: "Year 1: Foundation",
            subtitle: "Building the lifetime mindset, core math, coding foundation, and health habits.",
            sections: [
                {
                    title: "Phase 1: Build Your Mind (Months 1–3)",
                    type: "books",
                    items: [
                        // Psychology
                        { id: "y1_b_thinking_fast", title: "Thinking, Fast and Slow", desc: "Psychology - Daniel Kahneman", badge: "book", revisit: true },
                        { id: "y1_b_influence", title: "Influence", desc: "Psychology - Robert Cialdini", badge: "book" },
                        { id: "y1_b_laws_human", title: "The Laws of Human Nature", desc: "Psychology - Robert Greene", badge: "book" },
                        { id: "y1_b_psy_money", title: "The Psychology of Money", desc: "Psychology - Morgan Housel", badge: "book", revisit: true },
                        { id: "y1_b_courage_disliked", title: "The Courage to Be Disliked", desc: "Psychology - Ichiro Kishimi & Fumitake Koga", badge: "book" },
                        // Habits & Discipline
                        { id: "y1_b_atomic_habits", title: "Atomic Habits", desc: "Habits & Discipline - James Clear", badge: "book", revisit: true },
                        { id: "y1_b_deep_work", title: "Deep Work", desc: "Habits & Discipline - Cal Newport", badge: "book", revisit: true },
                        { id: "y1_b_war_of_art", title: "The War of Art", desc: "Habits & Discipline - Steven Pressfield", badge: "book" },
                        { id: "y1_b_essentialism", title: "Essentialism", desc: "Habits & Discipline - Greg McKeown", badge: "book" },
                        // Communication
                        { id: "y1_b_win_friends", title: "How to Win Friends and Influence People", desc: "Communication - Dale Carnegie", badge: "book" },
                        { id: "y1_b_never_split", title: "Never Split the Difference", desc: "Communication - Chris Voss", badge: "book" },
                        { id: "y1_b_made_to_stick", title: "Made to Stick", desc: "Communication - Chip Heath & Dan Heath", badge: "book" },
                        { id: "y1_b_talk_ted", title: "Talk Like TED", desc: "Communication - Carmine Gallo", badge: "book" }
                    ]
                },
                {
                    title: "Phase 2: Learn Business (Months 4–6)",
                    type: "books",
                    items: [
                        // Entrepreneurship
                        { id: "y1_b_lean_startup", title: "The Lean Startup", desc: "Entrepreneurship - Eric Ries", badge: "book" },
                        { id: "y1_b_zero_to_one", title: "Zero to One", desc: "Entrepreneurship - Peter Thiel", badge: "book", revisit: true },
                        { id: "y1_b_hard_thing", title: "The Hard Thing About Hard Things", desc: "Entrepreneurship - Ben Horowitz", badge: "book" },
                        { id: "y1_b_mom_test", title: "The Mom Test", desc: "Entrepreneurship - Rob Fitzpatrick", badge: "book" },
                        { id: "y1_b_personal_mba", title: "The Personal MBA", desc: "Entrepreneurship - Josh Kaufman", badge: "book" },
                        // Strategy
                        { id: "y1_b_good_strategy", title: "Good Strategy Bad Strategy", desc: "Strategy - Richard Rumelt", badge: "book" },
                        { id: "y1_b_blue_ocean", title: "Blue Ocean Strategy", desc: "Strategy - W. Chan Kim & Renée Mauborgne", badge: "book" },
                        { id: "y1_b_innovators_dilemma", title: "The Innovator's Dilemma", desc: "Strategy - Clayton Christensen", badge: "book" },
                        // Marketing
                        { id: "y1_b_this_is_marketing", title: "This Is Marketing", desc: "Marketing - Seth Godin", badge: "book" },
                        { id: "y1_b_storybrand", title: "Building a StoryBrand", desc: "Marketing - Donald Miller", badge: "book" },
                        { id: "y1_b_contagious", title: "Contagious", desc: "Marketing - Jonah Berger", badge: "book" }
                    ]
                },
                {
                    title: "Phase 3: Learn Leadership (Months 7–9)",
                    type: "books",
                    items: [
                        // Leadership
                        { id: "y1_b_leaders_eat_last", title: "Leaders Eat Last", desc: "Leadership - Simon Sinek", badge: "book" },
                        { id: "y1_b_infinite_game", title: "The Infinite Game", desc: "Leadership - Simon Sinek", badge: "book" },
                        { id: "y1_b_high_output", title: "High Output Management", desc: "Leadership - Andrew Grove", badge: "book", revisit: true },
                        { id: "y1_b_extreme_ownership", title: "Extreme Ownership", desc: "Leadership - Jocko Willink & Leif Babin", badge: "book" },
                        // Decision Making
                        { id: "y1_b_principles", title: "Principles", desc: "Decision Making - Ray Dalio", badge: "book" },
                        { id: "y1_b_poor_charlie", title: "Poor Charlie's Almanack", desc: "Decision Making - Charles T. Munger", badge: "book" },
                        { id: "y1_b_super_thinking", title: "Super Thinking", desc: "Decision Making - Gabriel Weinberg & Lauren McCann", badge: "book" }
                    ]
                },
                {
                    title: "Phase 4: Build Vision (Months 10–12)",
                    type: "books",
                    items: [
                        // Biography
                        { id: "y1_b_steve_jobs", title: "Steve Jobs", desc: "Biography - Walter Isaacson", badge: "book" },
                        { id: "y1_b_elon_musk", title: "Elon Musk", desc: "Biography - Walter Isaacson / Ashlee Vance", badge: "book" },
                        { id: "y1_b_everything_store", title: "The Everything Store", desc: "Biography - Brad Stone", badge: "book" },
                        { id: "y1_b_shoe_dog", title: "Shoe Dog", desc: "Biography - Phil Knight", badge: "book" },
                        { id: "y1_b_titan", title: "Titan (John D. Rockefeller)", desc: "Biography - Ron Chernow", badge: "book" },
                        { id: "y1_b_snowball", title: "The Snowball (Warren Buffett)", desc: "Biography - Alice Schroeder", badge: "book" },
                        // Science & Tech
                        { id: "y1_b_short_history", title: "A Short History of Nearly Everything", desc: "Science & Tech - Bill Bryson", badge: "book" },
                        { id: "y1_b_beginning_infinity", title: "The Beginning of Infinity", desc: "Science & Tech - David Deutsch", badge: "book" },
                        { id: "y1_b_lessons_history", title: "The Lessons of History", desc: "Science & Tech - Will & Ariel Durant", badge: "book" },
                        { id: "y1_b_sapiens", title: "Sapiens", desc: "Science & Tech - Yuval Noah Harari", badge: "book" },
                        // Economics
                        { id: "y1_b_basic_econ", title: "Basic Economics", desc: "Economics - Thomas Sowell", badge: "book" },
                        { id: "y1_b_econ_one_lesson", title: "Economics in One Lesson", desc: "Economics - Henry Hazlitt", badge: "book" },
                        { id: "y1_b_wealth_nations", title: "The Wealth of Nations (Selected sections)", desc: "Economics - Adam Smith", badge: "book" },
                        // Creativity
                        { id: "y1_b_creative_confidence", title: "Creative Confidence", desc: "Creativity - Tom Kelley & David Kelley", badge: "book" },
                        { id: "y1_b_steal_like_artist", title: "Steal Like an Artist", desc: "Creativity - Austin Kleon", badge: "book" },
                        { id: "y1_b_creative_habit", title: "The Creative Habit", desc: "Creativity - Twyla Tharp", badge: "book" },
                        // Philosophy
                        { id: "y1_b_meditations", title: "Meditations", desc: "Philosophy - Marcus Aurelius", badge: "book", revisit: true },
                        { id: "y1_b_letters_stoic", title: "Letters from a Stoic", desc: "Philosophy - Seneca", badge: "book" },
                        { id: "y1_b_mans_search", title: "Man's Search for Meaning", desc: "Philosophy - Viktor Frankl", badge: "book" },
                        // Finance & Investing
                        { id: "y1_b_intelligent_investor", title: "The Intelligent Investor", desc: "Finance & Investing - Benjamin Graham", badge: "book" },
                        { id: "y1_b_one_up", title: "One Up On Wall Street", desc: "Finance & Investing - Peter Lynch", badge: "book" },
                        { id: "y1_b_common_stocks", title: "Common Stocks and Uncommon Profits", desc: "Finance & Investing - Philip Fisher", badge: "book" }
                    ]
                },
                {
                    title: "Mathematics Foundation",
                    type: "math",
                    items: [
                        { id: "y1_m_arithmetic", title: "Arithmetic", desc: "Numbers, fractions, percentages, basic operations.", badge: "topic" },
                        { id: "y1_m_pre_algebra", title: "Pre-Algebra", desc: "Variables, integers, simple equations, prime factorization.", badge: "topic" },
                        { id: "y1_m_algebra", title: "Algebra", desc: "Linear equations, quadratics, functions, graphing.", badge: "topic" },
                        { id: "y1_m_geometry", title: "Geometry", desc: "Angles, shapes, area, volume, Pythagorean theorem.", badge: "topic" },
                        { id: "y1_m_probability", title: "Probability", desc: "Random events, combinations, conditional probability.", badge: "topic" },
                        { id: "y1_m_statistics", title: "Statistics", desc: "Mean, median, variance, distributions, correlation, data visual.", badge: "topic" }
                    ]
                },
                {
                    title: "Programming: Python & Tools",
                    type: "programming",
                    items: [
                        { id: "y1_p_variables", title: "Variables & Data Types", desc: "Understanding strings, ints, floats, booleans, lists, dicts.", badge: "topic" },
                        { id: "y1_p_loops", title: "Loops & Conditionals", desc: "For and While loops, If/Else flow control.", badge: "topic" },
                        { id: "y1_p_functions", title: "Functions & Scope", desc: "Defining parameters, return values, local vs global variables.", badge: "topic" },
                        { id: "y1_p_files", title: "File Handling & Debugging", desc: "Reading and writing files, using print/PDB to solve bugs.", badge: "topic" },
                        { id: "y1_p_oop", title: "Object-Oriented Programming (OOP)", desc: "Classes, objects, inheritance, polymorphism in Python.", badge: "topic" },
                        { id: "y1_p_algorithms", title: "Basic Algorithms & Data Structures", desc: "Search, sort, lists, stacks, queues, trees.", badge: "topic" },
                        { id: "y1_p_bigo", title: "Big O Notation", desc: "Time and space complexity analysis.", badge: "topic" },
                        { id: "y1_p_git", title: "Git & Version Control", desc: "Init, add, commit, branch, merge, diff in command line.", badge: "topic" },
                        { id: "y1_p_github", title: "GitHub Collaboration", desc: "Pushing code, creating pull requests, managing repositories.", badge: "topic" }
                    ]
                },
                {
                    title: "Year 1 Projects",
                    type: "programming",
                    items: [
                        { id: "y1_pr_calculator", title: "Calculator App", desc: "Command line or GUI calculator evaluating math formulas.", badge: "project" },
                        { id: "y1_pr_quiz", title: "Quiz Game", desc: "Load trivia questions from file, score user, save history.", badge: "project" },
                        { id: "y1_pr_notes", title: "Notes App", desc: "Create, view, edit, search, and delete note logs.", badge: "project" },
                        { id: "y1_pr_expense", title: "Expense Tracker", desc: "Log spend categories, calculate totals, display trends.", badge: "project" },
                        { id: "y1_pr_habit", title: "Habit Tracker", desc: "Check off daily tasks, keep streak records.", badge: "project" }
                    ]
                },
                {
                    title: "Writing, Communication & Health",
                    type: "extras",
                    items: [
                        { id: "y1_x_writing", title: "Daily Writing Routine", desc: "Log daily reflections, observations, business ideas, and user problems.", badge: "habit" },
                        { id: "y1_x_communication", title: "Communication Drills", desc: "Active practice in speaking, listening, explaining, storytelling, and negotiation.", badge: "habit" },
                        { id: "y1_x_health", title: "Health Foundations", desc: "Form positive habits around exercise, sleep hygiene, and clean nutrition.", badge: "habit" }
                    ]
                }
            ]
        },
        "2": {
            title: "Year 2: CS & Web Dev",
            subtitle: "Understanding computer architecture and mastering modern fullstack web systems.",
            sections: [
                {
                    title: "Computer Science Deep Dive",
                    type: "cs",
                    items: [
                        { id: "y2_cs_memory", title: "Memory & Storage", desc: "RAM, caches, disks, virtual memory representation.", badge: "topic" },
                        { id: "y2_cs_os", title: "Operating Systems", desc: "Kernel, processes, threads, file systems, IPC.", badge: "topic" },
                        { id: "y2_cs_network", title: "Networking", desc: "TCP/IP stacks, DNS, HTTP/S, websockets, routing.", badge: "topic" },
                        { id: "y2_cs_db", title: "Database Systems", desc: "Relational theory, indexes, normalization, ACID properties.", badge: "topic" },
                        { id: "y2_cs_algorithms", title: "Advanced Algorithms", desc: "Recursion, graph searches (BFS, DFS), dynamic programming.", badge: "topic" },
                        { id: "y2_cs_complexity", title: "Complexity Theory", desc: "P vs NP, NP-complete problems overview.", badge: "topic" }
                    ]
                },
                {
                    title: "Web Development Frontend",
                    type: "webdev",
                    items: [
                        { id: "y2_web_html", title: "Semantic HTML5", desc: "SEO tags, layouts, inputs, validation.", badge: "topic" },
                        { id: "y2_web_css", title: "Modern CSS3", desc: "Flexbox, CSS Grid, variables, transitions, responsive queries.", badge: "topic" },
                        { id: "y2_web_js", title: "JavaScript (ES6+)", desc: "Promises, async/await, DOM operations, event loops.", badge: "topic" },
                        { id: "y2_web_react", title: "React Framework", desc: "Components, hooks (useState, useEffect), state management, routing.", badge: "topic" }
                    ]
                },
                {
                    title: "Backend & Deployment",
                    type: "webdev",
                    items: [
                        { id: "y2_web_fastapi", title: "FastAPI Backend", desc: "Pydantic parsing, routing, middlewares, dependency injection.", badge: "topic" },
                        { id: "y2_web_sql", title: "SQL & Databases", desc: "SELECT, JOIN, indexing, schema design.", badge: "topic" },
                        { id: "y2_web_postgres", title: "PostgreSQL Setup", desc: "Hosting, backups, query analysis.", badge: "topic" },
                        { id: "y2_web_docker", title: "Docker Containerization", desc: "Writing Dockerfiles, using compose stacks for multi-service environments.", badge: "topic" },
                        { id: "y2_web_cloud", title: "Cloud Basics", desc: "Deploying to platforms like Fly.io, Render, AWS, or GCP.", badge: "topic" }
                    ]
                },
                {
                    title: "Year 2 Projects",
                    type: "webdev",
                    items: [
                        { id: "y2_pr_blog", title: "Personal Blog Engine", desc: "Custom engine with markdown parser, tagging, and database storage.", badge: "project" },
                        { id: "y2_pr_dashboard", title: "Interactive Analytics Dashboard", desc: "Front-to-back setup with charts displaying database logs.", badge: "project" },
                        { id: "y2_pr_portfolio", title: "Stunning Portfolio Web", desc: "High-performance homepage displaying projects and contact channels.", badge: "project" },
                        { id: "y2_pr_saas", title: "Minimum Viable SaaS App", desc: "User authentication, database logs, and billing integration placeholder.", badge: "project" }
                    ]
                }
            ]
        },
        "3": {
            title: "Year 3: AI & Product Design",
            subtitle: "Integrating artificial intelligence into products and mastering user experience.",
            sections: [
                {
                    title: "Artificial Intelligence Application",
                    type: "ai",
                    items: [
                        { id: "y3_ai_python", title: "Python for AI Data", desc: "Numpy, Pandas, data ingestion pipelines.", badge: "topic" },
                        { id: "y3_ai_apis", title: "API Integration", desc: "Interfacing OpenAI, Anthropic, or Gemini APIs.", badge: "topic" },
                        { id: "y3_ai_prompts", title: "Prompt Engineering", desc: "Few-shot templates, chain of thought, instruction tuning.", badge: "topic" },
                        { id: "y3_ai_automation", title: "AI Automation", desc: "LangChain or LlamaIndex workflows, processing tools.", badge: "topic" },
                        { id: "y3_ai_rag", title: "RAG (Retrieval-Augmented Generation)", desc: "Vector DBs, embeddings, semantic searches.", badge: "topic" },
                        { id: "y3_ai_agents", title: "AI Agent Networks", desc: "State machine agents with tools and memory systems.", badge: "topic" },
                        { id: "y3_ai_ml", title: "Basic ML Concepts", desc: "Linear regression, decision trees, train/test validation splits.", badge: "topic" }
                    ]
                },
                {
                    title: "Product Design (UI/UX)",
                    type: "design",
                    items: [
                        { id: "y3_des_ui", title: "User Interface Design", desc: "Visual hierarchies, typography, color theory, layout grids.", badge: "topic" },
                        { id: "y3_des_ux", title: "User Experience Design", desc: "Wireframing, user flows, friction mapping, design systems.", badge: "topic" },
                        { id: "y3_des_thinking", title: "Design Thinking", desc: "Empathize, Define, Ideate, Prototype, Test framework.", badge: "topic" },
                        { id: "y3_des_research", title: "User Research & Interviews", desc: "Conducting qualitative feedback sessions, surveys, analytics logs.", badge: "topic" }
                    ]
                },
                {
                    title: "Year 3 Projects",
                    type: "ai",
                    items: [
                        { id: "y3_pr_ai_app", title: "AI-Powered Productivity Helper", desc: "Deploy a SaaS app using LLMs, Vector DB searches, and user accounts.", badge: "project" }
                    ]
                }
            ]
        },
        "4": {
            title: "Year 4: Biz & Finance",
            subtitle: "Studying go-to-market systems, sales channels, cash management, and valuation.",
            sections: [
                {
                    title: "Business & Marketing",
                    type: "business",
                    items: [
                        { id: "y4_bz_marketing", title: "Modern Marketing", desc: "SEO, content pipelines, paid acquisition channels.", badge: "topic" },
                        { id: "y4_bz_sales", title: "Sales & Negotiation", desc: "Handling objections, closing deals, B2B sales pipelines.", badge: "topic" },
                        { id: "y4_bz_pricing", title: "Pricing Strategies", desc: "Value-based pricing, unit economics, tier models.", badge: "topic" },
                        { id: "y4_bz_psychology", title: "Customer Psychology", desc: "Incentives, decision loops, viral mechanics.", badge: "topic" },
                        { id: "y4_bz_branding", title: "Branding & Positioning", desc: "Storytelling, core messaging, value proposition fit.", badge: "topic" },
                        { id: "y4_bz_pmf", title: "Product-Market Fit", desc: "Iterating on user retention and engagement logs.", badge: "topic" }
                    ]
                },
                {
                    title: "Finance & Accounting",
                    type: "finance",
                    items: [
                        { id: "y4_fn_accounting", title: "Accounting Basics", desc: "Double-entry bookkeeping, ledger entries, accounting rules.", badge: "topic" },
                        { id: "y4_fn_cashflow", title: "Cash Flow Management", desc: "Working capital, cash burns, runway logs.", badge: "topic" },
                        { id: "y4_fn_pandl", title: "Profit & Loss Sheets", desc: "Revenue, cost of goods, operating margins.", badge: "topic" },
                        { id: "y4_fn_budgeting", title: "Budgeting & Foreseeing", desc: "Setting up company budget models and forecasts.", badge: "topic" },
                        { id: "y4_fn_investing", title: "Investing & Allocation", desc: "Compounding growth models, equities, portfolio risk.", badge: "topic" }
                    ]
                },
                {
                    title: "Year 4 Projects",
                    type: "business",
                    items: [
                        { id: "y4_pr_biz", title: "Income-Generating Product Launch", desc: "Launch a product or service with payment processing and verify real payment flows.", badge: "project" }
                    ]
                }
            ]
        },
        "5": {
            title: "Year 5: Leadership",
            subtitle: "Mastering team leadership, organizational design, feedback loops, and systems thinking.",
            sections: [
                {
                    title: "Leadership & Management",
                    type: "leadership",
                    items: [
                        { id: "y5_ld_hiring", title: "Hiring & Recruiting", desc: "Sourcing talent, vetting candidates, building onboarding docs.", badge: "topic" },
                        { id: "y5_ld_feedback", title: "Feedback Systems", desc: "Conducting reviews, holding 1-on-1s, active listening methods.", badge: "topic" },
                        { id: "y5_ld_delegation", title: "Task Delegation", desc: "Empowering teams while tracking core milestones.", badge: "topic" },
                        { id: "y5_ld_motivation", title: "Team Motivation", desc: "Drive systems, ownership models, incentive alignment.", badge: "topic" },
                        { id: "y5_ld_culture", title: "Company Culture", desc: "Core values, collaboration guidelines, trust patterns.", badge: "topic" },
                        { id: "y5_ld_decisions", title: "Strategic Decision-Making", desc: "Mental frameworks, risk management, delegation structures.", badge: "topic" }
                    ]
                },
                {
                    title: "Systems Thinking",
                    type: "business",
                    items: [
                        { id: "y5_sys_loops", title: "Feedback Loops", desc: "Reinforcing and balancing loops, system behaviors.", badge: "topic" },
                        { id: "y5_sys_incentives", title: "Incentive Networks", desc: "Predicting player motivations, alignment checks.", badge: "topic" },
                        { id: "y5_sys_tradeoffs", title: "Trade-off Matrices", desc: "Evaluating alternatives, short-term vs long-term decisions.", badge: "topic" },
                        { id: "y5_sys_second_order", title: "Second-Order Effects", desc: "Anticipating cascading outcomes, unintended feedback loops.", badge: "topic" }
                    ]
                }
            ]
        },
        "6": {
            title: "Years 6–10: Deep Dive",
            subtitle: "Going deeper into specialized systems, advanced models, and historical foundations.",
            sections: [
                {
                    title: "Advanced Software Engineering",
                    type: "programming",
                    items: [
                        { id: "y6_se_arch", title: "System Architecture", desc: "Monoliths vs microservices, message queues, caches.", badge: "topic" },
                        { id: "y6_se_dist", title: "Distributed Systems", desc: "CAP theorem, replication, consensus models, partitioning.", badge: "topic" },
                        { id: "y6_se_test", title: "Testing & Quality", desc: "TDD, unit/integration testing, CI/CD setups.", badge: "topic" },
                        { id: "y6_se_clean", title: "Clean Code Standards", desc: "SOLID principles, patterns, refactoring strategies.", badge: "topic" },
                        { id: "y6_se_security", title: "System Security", desc: "OWASP, crypto basics, access tokens, IAM.", badge: "topic" }
                    ]
                },
                {
                    title: "Advanced AI",
                    type: "ai",
                    items: [
                        { id: "y6_ai_ml", title: "Machine Learning Math", desc: "Linear algebra, multivariable calculus, optimization.", badge: "topic" },
                        { id: "y6_ai_dl", title: "Deep Learning Architectures", desc: "CNNs, RNNs, transformers, attention models.", badge: "topic" },
                        { id: "y6_ai_nn", title: "Neural Networks from Scratch", desc: "Backpropagation, weights, activation functions.", badge: "topic" },
                        { id: "y6_ai_ops", title: "MLOps Pipelines", desc: "Model serving, tracking metrics, drift monitoring.", badge: "topic" }
                    ]
                },
                {
                    title: "Deep Economics",
                    type: "economics",
                    items: [
                        { id: "y6_ec_macro", title: "Macroeconomics", desc: "GDP, inflation, interest rates, fiscal policy.", badge: "topic" },
                        { id: "y6_ec_micro", title: "Microeconomics", desc: "Supply/demand, price elasticities, utility models.", badge: "topic" },
                        { id: "y6_ec_market", title: "Market Structures", desc: "Monopoly, oligopoly, perfect competition pricing.", badge: "topic" },
                        { id: "y6_ec_monetary", title: "Monetary Systems", desc: "Central banking, currency generation, banking liquidity.", badge: "topic" }
                    ]
                },
                {
                    title: "Deep Psychology",
                    type: "psychology",
                    items: [
                        { id: "y6_ps_biases", title: "Cognitive Biases", desc: "Confirmation bias, loss aversion, heuristics.", badge: "topic" },
                        { id: "y6_ps_group", title: "Group Behavior & Dynam.", desc: "Tribalism, social proofs, crowd networks.", badge: "topic" },
                        { id: "y6_ps_personality", title: "Personality Theories", desc: "Big Five, motivation vectors, work styles.", badge: "topic" },
                        { id: "y6_ps_decision", title: "Decision Sciences", desc: "Prospect theory, choice architecture, nudge designs.", badge: "topic" }
                    ]
                },
                {
                    title: "Deep History",
                    type: "history",
                    items: [
                        { id: "y6_hi_ancient", title: "Ancient Civilizations", desc: "Sumer, Egypt, Greece, Rome systems.", badge: "topic" },
                        { id: "y6_hi_empires", title: "Rise & Fall of Empires", desc: "Trade routes, military patterns, institutional decay.", badge: "topic" },
                        { id: "y6_hi_scientific", title: "Scientific Revolutions", desc: "Copernicus to Newton, paradigm shifts.", badge: "topic" },
                        { id: "y6_hi_industrial", title: "Industrial Revolutions", desc: "Steam, electricity, computing changes.", badge: "topic" }
                    ]
                },
                {
                    title: "Deep Philosophy",
                    type: "philosophy",
                    items: [
                        { id: "y6_ph_stoic", title: "Stoic Ethics", desc: "Dichotomy of control, virtue ethics.", badge: "topic" },
                        { id: "y6_ph_ethics", title: "General Ethics", desc: "Utilitarianism, deontology, virtue theories.", badge: "topic" },
                        { id: "y6_ph_logic", title: "Logic & Fallacies", desc: "Syllogisms, propositional logic, informal fallacies.", badge: "topic" },
                        { id: "y6_ph_epistemology", title: "Epistemology", desc: "Nature of knowledge, verification theories.", badge: "topic" }
                    ]
                }
            ]
        }
    },
    priorities: [
        { name: "Reading", priority: 5, category: "books" },
        { name: "Programming", priority: 5, category: "programming" },
        { name: "Mathematics", priority: 4, category: "math" },
        { name: "Computer Science", priority: 5, category: "cs" },
        { name: "Artificial Intelligence", priority: 4, category: "ai" },
        { name: "Business", priority: 5, category: "business" },
        { name: "Economics", priority: 4, category: "economics" },
        { name: "Psychology", priority: 5, category: "psychology" },
        { name: "History", priority: 4, category: "history" },
        { name: "Philosophy", priority: 4, category: "philosophy" },
        { name: "Communication", priority: 5, category: "communication" },
        { name: "Writing", priority: 5, category: "writing" },
        { name: "Leadership", priority: 5, category: "leadership" },
        { name: "Finance", priority: 4, category: "finance" },
        { name: "Health & Fitness", priority: 5, category: "health" }
    ],
    compoundingSkills: [
        { id: "c_reading", name: "Reading", desc: "Reading books, papers, or articles to gather new perspectives." },
        { id: "c_writing", name: "Writing", desc: "Writing daily summaries, ideas, essays, or code specs." },
        { id: "c_programming", name: "Programming", desc: "Coding projects, scripts, reviewing algorithms." },
        { id: "c_math", name: "Mathematics", desc: "Solving math exercises or studying data theory." },
        { id: "c_speaking", name: "Speaking & Listening", desc: "Practicing explanations or listening carefully to arguments." },
        { id: "c_selling", name: "Selling & Negotiation", desc: "Selling ideas or items, negotiating boundaries." },
        { id: "c_problem_solving", name: "Decision Making & Problem Solving", desc: "Reflecting on choices and solving complex bugs." }
    ]
};

// Global App State
let appState = {
    checked: {},    // itemId -> boolean
    notes: {},      // itemId -> string
    ratings: {},    // itemId -> number (1-5)
    dates: {},      // itemId -> { started, completed }
    builds: [],     // Array of { id, year, name, desc, link, tech }
    compoundingLogs: {}, // skillId -> count/log array
    currentView: "1" // "1", "2", "3", "4", "5", "6", "compounding", "builds"
};

// LocalStorage helper keys
const STORAGE_KEY = "founder_roadmap_state_v1";
const AUTH_HASH_KEY = "founder_roadmap_password_hash_v1";
const AUTH_SESSION_KEY = "founder_roadmap_password_unlocked_v1";
let appInitialized = false;

// Init App
document.addEventListener("DOMContentLoaded", () => {
    setupAuthUI();
});

function setupAuthUI() {
    const form = document.getElementById("auth-form");
    const passwordInput = document.getElementById("auth-password");
    const confirmWrap = document.getElementById("setup-confirm-wrap");
    const confirmInput = document.getElementById("auth-confirm");
    const messageEl = document.getElementById("auth-message");
    const submitBtn = document.getElementById("auth-submit");
    const logoutBtn = document.getElementById("auth-logout");
    const sidebarLogout = document.getElementById("btn-logout");
    const authGate = document.getElementById("auth-gate");
    const hasPassword = () => Boolean(localStorage.getItem(AUTH_HASH_KEY));
    const unlocked = () => localStorage.getItem(AUTH_SESSION_KEY) === "true";

    document.body.classList.add("locked");

    const showLockedScreen = () => {
        document.body.classList.add("locked");
        authGate.classList.remove("hidden");
        if (!hasPassword()) {
            messageEl.textContent = "Create a password for this device.";
            confirmWrap.classList.remove("hidden");
            confirmInput.value = "";
            submitBtn.textContent = "Set Password";
            logoutBtn.classList.add("hidden");
        } else {
            messageEl.textContent = "Enter your password to continue.";
            confirmWrap.classList.add("hidden");
            submitBtn.textContent = "Unlock";
            logoutBtn.classList.remove("hidden");
        }
        passwordInput.value = "";
    };

    const showUnlockedScreen = () => {
        document.body.classList.remove("locked");
        authGate.classList.add("hidden");
        if (!appInitialized) {
            initializeApp();
        }
    };

    const handleUnlock = async (event) => {
        event.preventDefault();

        const password = passwordInput.value;
        if (!password) {
            showToast("Enter a password first.");
            return;
        }

        if (!hasPassword()) {
            const confirmPassword = confirmInput.value;
            if (!confirmPassword) {
                showToast("Confirm your new password.");
                return;
            }
            if (password !== confirmPassword) {
                showToast("Passwords do not match.");
                return;
            }

            localStorage.setItem(AUTH_HASH_KEY, await hashPassword(password));
            localStorage.setItem(AUTH_SESSION_KEY, "true");
            showUnlockedScreen();
            return;
        }

        const storedHash = localStorage.getItem(AUTH_HASH_KEY);
        if ((await hashPassword(password)) !== storedHash) {
            showToast("Wrong password.");
            return;
        }

        localStorage.setItem(AUTH_SESSION_KEY, "true");
        showUnlockedScreen();
    };

    const handleLogout = () => {
        localStorage.removeItem(AUTH_SESSION_KEY);
        showLockedScreen();
    };

    form.addEventListener("submit", handleUnlock);
    logoutBtn.addEventListener("click", handleLogout);
    if (sidebarLogout) sidebarLogout.addEventListener("click", handleLogout);

    if (hasPassword() && unlocked()) {
        showUnlockedScreen();
    } else {
        showLockedScreen();
    }
}

async function hashPassword(password) {
    const encoded = new TextEncoder().encode(password);
    const digest = await crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(digest)).map(byte => byte.toString(16).padStart(2, "0")).join("");
}

function initializeApp() {
    loadState();
    registerEvents();
    renderSidebarStats();
    navigateTo(appState.currentView);
    lucide.createIcons();
    appInitialized = true;
}

// Load State from LocalStorage
function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            appState = { ...appState, ...parsed };
        } catch (e) {
            console.error("Failed to parse saved state", e);
        }
    }
}

// Save State to LocalStorage
function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    renderSidebarStats();
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toast-message");
    toastMsg.textContent = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// Navigation Handler
function registerEvents() {
    // Sidebar Nav items
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", () => {
            document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
            item.classList.add("active");
            
            if (item.dataset.year) {
                navigateTo(item.dataset.year);
            } else if (item.dataset.extra) {
                navigateTo(item.dataset.extra);
            }
        });
    });

    // Search bar
    document.getElementById("search-input").addEventListener("input", (e) => {
        handleSearch(e.target.value);
    });

    // Export btn
    document.getElementById("btn-export").addEventListener("click", exportData);

    // Import btns
    const importTrigger = document.getElementById("btn-import-trigger");
    const importFile = document.getElementById("import-file");
    
    importTrigger.addEventListener("click", () => importFile.click());
    importFile.addEventListener("change", importData);
}

// Navigate to different page views
function navigateTo(viewId) {
    appState.currentView = viewId;
    saveState();

    const titleEl = document.getElementById("current-view-title");
    const subtitleEl = document.getElementById("current-view-subtitle");
    const container = document.getElementById("curriculum-container");
    
    container.innerHTML = "";
    document.getElementById("search-input").value = "";

    // Highlight the sidebar item
    document.querySelectorAll(".nav-item").forEach(n => {
        n.classList.remove("active");
        if (n.dataset.year === viewId || n.dataset.extra === viewId) {
            n.classList.add("active");
        }
    });

    if (ROADMAP_DATA.years[viewId]) {
        // Standard Year View
        const yearData = ROADMAP_DATA.years[viewId];
        titleEl.textContent = yearData.title;
        subtitleEl.textContent = yearData.subtitle;
        
        const grid = document.createElement("div");
        grid.className = "curriculum-grid";
        
        yearData.sections.forEach(section => {
            const secCard = document.createElement("div");
            secCard.className = "subject-section";
            
            // Header stats
            const sectionTotal = section.items.length;
            const sectionChecked = section.items.filter(item => appState.checked[item.id]).length;
            
            secCard.innerHTML = `
                <div class="section-header">
                    <div class="section-info">
                        <h3>${section.title}</h3>
                        <p class="text-muted">Interactive milestone tracker</p>
                    </div>
                    <div class="section-stats">${sectionChecked} / ${sectionTotal} Done</div>
                </div>
            `;
            
            const itemsGrid = document.createElement("div");
            itemsGrid.className = "items-grid";
            
            section.items.forEach(item => {
                const isChecked = appState.checked[item.id] || false;
                const hasNotesClass = appState.notes[item.id] ? "has-notes" : "";
                
                const itemCard = document.createElement("div");
                itemCard.className = `item-card ${isChecked ? 'completed' : ''}`;
                itemCard.dataset.itemId = item.id;
                
                // Card logic
                itemCard.innerHTML = `
                    <div class="item-card-top">
                        <label class="checkbox-wrapper" onclick="event.stopPropagation()">
                            <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleItemStatus('${item.id}', this)">
                            <div class="checkbox-visual">
                                <i data-lucide="check"></i>
                            </div>
                        </label>
                        <div class="item-info">
                            <div class="item-title">${item.title}</div>
                            <div class="item-desc">${item.desc}</div>
                        </div>
                    </div>
                    <div class="item-card-bottom">
                        <span class="badge badge-${item.badge}">${item.badge}</span>
                        <div class="item-actions">
                            <i data-lucide="file-text" class="${hasNotesClass}" title="Take Notes" onclick="openDrawer('${item.id}', '${item.badge}')"></i>
                        </div>
                    </div>
                    ${item.revisit ? `
                        <div class="revisit-indicator" title="Revisit book later">
                            <i data-lucide="rotate-ccw"></i>
                        </div>
                    ` : ''}
                `;
                
                // Clicking the card opens details notes drawer
                itemCard.addEventListener("click", (e) => {
                    if (e.target.tagName !== "INPUT" && !e.target.closest(".checkbox-wrapper")) {
                        openDrawer(item.id, item.badge);
                    }
                });

                itemsGrid.appendChild(itemCard);
            });
            
            secCard.appendChild(itemsGrid);
            grid.appendChild(secCard);
        });
        
        container.appendChild(grid);
    } else if (viewId === "compounding") {
        // Compounding Skills Tracker View
        titleEl.textContent = "Compounding Skills";
        subtitleEl.textContent = "These practices become exponentially more valuable every single year.";
        
        const listDiv = document.createElement("div");
        listDiv.className = "priority-table-card";
        listDiv.innerHTML = `
            <h3>Compounding Practices Log</h3>
            <p class="text-muted" style="margin-bottom: 1.5rem;">Log a check-in every day you work on these key disciplines. Progress builds like compound interest.</p>
            <div class="list-container"></div>
        `;
        
        const listContainer = listDiv.querySelector(".list-container");
        
        ROADMAP_DATA.compoundingSkills.forEach(skill => {
            const count = appState.compoundingLogs[skill.id] || 0;
            const itemCard = document.createElement("div");
            itemCard.className = "list-item-card";
            
            let icon = "trending-up";
            if (skill.id === "c_reading") icon = "book-open";
            else if (skill.id === "c_writing") icon = "pen-tool";
            else if (skill.id === "c_programming") icon = "code";
            else if (skill.id === "c_math") icon = "percent";
            else if (skill.id === "c_speaking") icon = "message-circle";
            else if (skill.id === "c_selling") icon = "dollar-sign";
            else if (skill.id === "c_problem_solving") icon = "help-circle";

            itemCard.innerHTML = `
                <div class="list-item-left">
                    <i data-lucide="${icon}"></i>
                    <div>
                        <div class="list-item-name">${skill.name}</div>
                        <div class="list-item-meta">${skill.desc}</div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <span style="font-weight: 700; color: var(--color-success); font-size: 1.1rem;">${count} Logs</span>
                    <button class="btn btn-secondary" style="padding: 0.4rem 0.8rem;" onclick="logCompoundingCheck('${skill.id}')">+ Log Practice</button>
                </div>
            `;
            listContainer.appendChild(itemCard);
        });
        
        container.appendChild(listDiv);

        // Add priority stats table as well
        const statsCard = document.createElement("div");
        statsCard.className = "priority-table-card";
        statsCard.style.marginTop = "2rem";
        statsCard.innerHTML = `
            <h3>Personal University Priority Grid</h3>
            <p class="text-muted">Target priority level for each core curriculum subject area.</p>
            <table class="priority-table">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Curriculum Priority</th>
                        <th>Section Progress</th>
                    </tr>
                </thead>
                <tbody id="priority-table-body"></tbody>
            </table>
        `;
        
        container.appendChild(statsCard);
        renderPriorityTable();
        
    } else if (viewId === "builds") {
        // Annual builds log
        titleEl.textContent = "Annual Build Log";
        subtitleEl.textContent = "Never stop creating. Building is where theory translates into true skill.";
        
        const buildSection = document.createElement("div");
        buildSection.className = "priority-table-card";
        
        buildSection.innerHTML = `
            <div class="builds-header">
                <h3>Annual Builds Catalog</h3>
                <p class="text-muted">Review, add, and monitor the products, essays, open source, or experiments you create yearly.</p>
            </div>
            
            <div class="add-build-form">
                <div>
                    <label class="section-label" for="add-year">Year</label>
                    <select id="add-year" class="form-input" style="height: 38px;">
                        <option value="Year 1">Year 1</option>
                        <option value="Year 2">Year 2</option>
                        <option value="Year 3">Year 3</option>
                        <option value="Year 4">Year 4</option>
                        <option value="Year 5">Year 5</option>
                        <option value="Year 6-10">Years 6-10</option>
                    </select>
                </div>
                <div>
                    <label class="section-label" for="add-name">Project / Build Name</label>
                    <input type="text" id="add-name" class="form-input" placeholder="e.g. Habit Tracker, SaaS Platform">
                </div>
                <div>
                    <label class="section-label" for="add-tech">Tech Stack / Medium</label>
                    <input type="text" id="add-tech" class="form-input" placeholder="e.g. Python, React & Node, Essay">
                </div>
                <button class="btn btn-primary" onclick="addBuildItem()">Add Build</button>
                <div style="grid-column: span 4; margin-top: 0.5rem;">
                    <label class="section-label" for="add-desc">Brief Description</label>
                    <input type="text" id="add-desc" class="form-input" placeholder="What does this build accomplish? What did you solve?">
                </div>
            </div>

            <div class="list-container" id="builds-list-container">
                <!-- Builds list will render dynamically -->
            </div>
        `;
        
        container.appendChild(buildSection);
        renderBuildsList();
    }

    lucide.createIcons();
}

// Render priority metrics table
function renderPriorityTable() {
    const tbody = document.getElementById("priority-table-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    // Map curriculum subjects to progress
    const itemsMap = {};
    Object.keys(ROADMAP_DATA.years).forEach(yrKey => {
        ROADMAP_DATA.years[yrKey].sections.forEach(sec => {
            const cat = sec.type;
            if (!itemsMap[cat]) itemsMap[cat] = [];
            sec.items.forEach(itm => itemsMap[cat].push(itm.id));
        });
    });

    ROADMAP_DATA.priorities.forEach(p => {
        const cat = p.category;
        const matchingIds = itemsMap[cat] || [];
        const total = matchingIds.length;
        const done = matchingIds.filter(id => appState.checked[id]).length;
        const pct = total > 0 ? Math.round((done / total) * 100) : 0;

        // Render Priority Stars
        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= p.priority) {
                starsHTML += `<i data-lucide="star"></i>`;
            } else {
                starsHTML += `<i data-lucide="star" class="empty"></i>`;
            }
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><strong>${p.name}</strong></td>
            <td><div class="priority-stars">${starsHTML}</div></td>
            <td>
                <div class="table-progress-container">
                    <div class="table-progress-bar">
                        <div class="table-progress-fill" style="width: ${pct}%"></div>
                    </div>
                    <span>${pct}% (${done}/${total})</span>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Log checkin for compounding skills
window.logCompoundingCheck = function(skillId) {
    if (!appState.compoundingLogs[skillId]) {
        appState.compoundingLogs[skillId] = 0;
    }
    appState.compoundingLogs[skillId]++;
    saveState();
    showToast(`Compounding check-in logged!`);
    navigateTo("compounding");
};

// Render Builds catalog
function renderBuildsList() {
    const listContainer = document.getElementById("builds-list-container");
    if (!listContainer) return;
    listContainer.innerHTML = "";

    if (appState.builds.length === 0) {
        listContainer.innerHTML = `<div class="text-muted" style="text-align: center; padding: 2rem;">No builds added yet. Never stop creating!</div>`;
        return;
    }

    // Sort by year reverse
    const sorted = [...appState.builds].reverse();

    sorted.forEach(build => {
        const card = document.createElement("div");
        card.className = "list-item-card";
        card.innerHTML = `
            <div class="list-item-left" style="align-items: flex-start;">
                <i data-lucide="hammer" style="margin-top: 0.2rem;"></i>
                <div>
                    <div class="list-item-name" style="display:flex; align-items:center; gap: 0.5rem;">
                        ${build.name}
                        <span class="badge badge-habit" style="text-transform: none;">${build.year}</span>
                        ${build.tech ? `<span class="badge badge-topic" style="text-transform: none;">${build.tech}</span>` : ''}
                    </div>
                    <div class="list-item-meta" style="margin-top:0.4rem; font-size:0.85rem; color:var(--text-secondary);">${build.desc || 'No description provided.'}</div>
                </div>
            </div>
            <button class="close-btn" title="Delete Build Log" onclick="deleteBuildItem('${build.id}')">
                <i data-lucide="trash-2" style="width:16px; height:16px; color:var(--text-muted);"></i>
            </button>
        `;
        listContainer.appendChild(card);
    });
    lucide.createIcons();
}

// Add a build item
window.addBuildItem = function() {
    const year = document.getElementById("add-year").value;
    const name = document.getElementById("add-name").value.trim();
    const tech = document.getElementById("add-tech").value.trim();
    const desc = document.getElementById("add-desc").value.trim();

    if (!name) {
        showToast("Please provide a build name.");
        return;
    }

    const newBuild = {
        id: "build_" + Date.now(),
        year,
        name,
        tech,
        desc
    };

    appState.builds.push(newBuild);
    saveState();
    showToast("Project build logged successfully!");
    
    // Clear inputs
    document.getElementById("add-name").value = "";
    document.getElementById("add-tech").value = "";
    document.getElementById("add-desc").value = "";
    
    renderBuildsList();
};

// Delete build item
window.deleteBuildItem = function(id) {
    if (confirm("Are you sure you want to delete this build log?")) {
        appState.builds = appState.builds.filter(b => b.id !== id);
        saveState();
        showToast("Build log removed.");
        renderBuildsList();
    }
};

// Render progress in Sidebar
function renderSidebarStats() {
    const fill = document.getElementById("overall-progress-bar");
    const label = document.getElementById("overall-percentage");
    const countEl = document.getElementById("completed-count");
    const totalEl = document.getElementById("total-count");

    let totalItems = 0;
    let completedItems = 0;

    Object.keys(ROADMAP_DATA.years).forEach(yr => {
        ROADMAP_DATA.years[yr].sections.forEach(sec => {
            sec.items.forEach(itm => {
                totalItems++;
                if (appState.checked[itm.id]) {
                    completedItems++;
                }
            });
        });
    });

    const pct = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    if (fill) fill.style.width = `${pct}%`;
    if (label) label.textContent = `${pct}%`;
    if (countEl) countEl.textContent = completedItems;
    if (totalEl) totalEl.textContent = totalItems;
}

// Toggle individual item status from checkbox clicks
window.toggleItemStatus = function(itemId, checkboxEl) {
    appState.checked[itemId] = checkboxEl.checked;
    
    // Auto set complete date if checked
    if (checkboxEl.checked) {
        if (!appState.dates[itemId]) appState.dates[itemId] = {};
        appState.dates[itemId].completed = new Date().toISOString().split('T')[0];
    }

    saveState();
    
    // Update card styling
    const card = checkboxEl.closest(".item-card");
    if (card) {
        if (checkboxEl.checked) {
            card.classList.add("completed");
        } else {
            card.classList.remove("completed");
        }
    }
    
    // Refresh stats shown on active section headers
    if (ROADMAP_DATA.years[appState.currentView]) {
        navigateTo(appState.currentView);
    }
    showToast("Progress updated.");
};

// Search handling across entire roadmap
function handleSearch(query) {
    const q = query.toLowerCase().trim();
    const container = document.getElementById("curriculum-container");
    const titleEl = document.getElementById("current-view-title");
    const subtitleEl = document.getElementById("current-view-subtitle");
    
    if (q === "") {
        navigateTo(appState.currentView);
        return;
    }

    titleEl.textContent = "Search Results";
    subtitleEl.textContent = `Showing matches for "${query}"`;
    container.innerHTML = "";

    const resultsGrid = document.createElement("div");
    resultsGrid.className = "items-grid";

    let matchCount = 0;

    Object.keys(ROADMAP_DATA.years).forEach(yrKey => {
        const year = ROADMAP_DATA.years[yrKey];
        year.sections.forEach(sec => {
            sec.items.forEach(item => {
                const matchTitle = item.title.toLowerCase().includes(q);
                const matchDesc = item.desc.toLowerCase().includes(q);
                
                if (matchTitle || matchDesc) {
                    matchCount++;
                    const isChecked = appState.checked[item.id] || false;
                    const hasNotesClass = appState.notes[item.id] ? "has-notes" : "";
                    
                    const itemCard = document.createElement("div");
                    itemCard.className = `item-card ${isChecked ? 'completed' : ''}`;
                    itemCard.dataset.itemId = item.id;
                    
                    itemCard.innerHTML = `
                        <div class="item-card-top">
                            <label class="checkbox-wrapper" onclick="event.stopPropagation()">
                                <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleItemStatus('${item.id}', this)">
                                <div class="checkbox-visual">
                                    <i data-lucide="check"></i>
                                </div>
                            </label>
                            <div class="item-info">
                                <div class="item-title">${item.title}</div>
                                <div class="item-desc">${item.desc} <br><small class="text-muted">${year.title} &bull; ${sec.title}</small></div>
                            </div>
                        </div>
                        <div class="item-card-bottom">
                            <span class="badge badge-${item.badge}">${item.badge}</span>
                            <div class="item-actions">
                                <i data-lucide="file-text" class="${hasNotesClass}" title="Take Notes" onclick="openDrawer('${item.id}', '${item.badge}')"></i>
                            </div>
                        </div>
                    `;
                    
                    itemCard.addEventListener("click", (e) => {
                        if (e.target.tagName !== "INPUT" && !e.target.closest(".checkbox-wrapper")) {
                            openDrawer(item.id, item.badge);
                        }
                    });
                    
                    resultsGrid.appendChild(itemCard);
                }
            });
        });
    });

    if (matchCount === 0) {
        container.innerHTML = `<div class="text-muted" style="text-align: center; padding: 3rem;">No matches found for "${query}". Try another search term.</div>`;
    } else {
        container.appendChild(resultsGrid);
        lucide.createIcons();
    }
}

// Notes Drawer Logic
let activeEditingItemId = null;

window.openDrawer = function(itemId, badgeType) {
    activeEditingItemId = itemId;
    
    // Find item data
    let foundItem = null;
    let foundYear = null;
    let foundSection = null;
    
    Object.keys(ROADMAP_DATA.years).forEach(yrKey => {
        ROADMAP_DATA.years[yrKey].sections.forEach(sec => {
            sec.items.forEach(itm => {
                if (itm.id === itemId) {
                    foundItem = itm;
                    foundYear = ROADMAP_DATA.years[yrKey];
                    foundSection = sec;
                }
            });
        });
    });

    if (!foundItem) return;

    // Load drawer items elements
    document.getElementById("drawer-item-type").textContent = badgeType;
    document.getElementById("drawer-item-type").className = `badge badge-${badgeType}`;
    document.getElementById("drawer-item-title").textContent = foundItem.title;
    document.getElementById("drawer-item-subtitle").innerHTML = `${foundSection.title} &bull; ${foundYear.title}`;
    
    // Checkbox status
    const statusBtn = document.getElementById("drawer-status-btn");
    const statusText = document.getElementById("drawer-status-text");
    const isChecked = appState.checked[itemId] || false;
    
    if (isChecked) {
        statusBtn.className = "status-btn checked";
        statusBtn.querySelector("i").setAttribute("data-lucide", "check-circle-2");
        statusText.textContent = "Completed";
    } else {
        statusBtn.className = "status-btn";
        statusBtn.querySelector("i").setAttribute("data-lucide", "circle");
        statusText.textContent = "Not Started";
    }

    // Load Ratings
    renderDrawerStars(appState.ratings[itemId] || 0);

    // Load Dates
    const datesObj = appState.dates[itemId] || {};
    document.getElementById("date-started").value = datesObj.started || "";
    document.getElementById("date-completed").value = datesObj.completed || "";

    // Load Notes
    document.getElementById("learning-notes").value = appState.notes[itemId] || "";

    // Open Drawer UI
    document.getElementById("notes-drawer").classList.add("open");
    lucide.createIcons();
};

window.closeDrawer = function() {
    document.getElementById("notes-drawer").classList.remove("open");
    activeEditingItemId = null;
};

// Render clickable stars in Drawer
function renderDrawerStars(rating) {
    const starContainer = document.getElementById("drawer-rating-container");
    starContainer.innerHTML = "";
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.className = `rating-star ${i <= rating ? 'active' : ''}`;
        star.innerHTML = "&#9733;"; // Star unicode character
        star.addEventListener("click", () => {
            renderDrawerStars(i);
            // Temp save rating to check state changes
            appState.ratings[activeEditingItemId] = i;
        });
        starContainer.appendChild(star);
    }
}

// Toggle status inside drawer
window.toggleDrawerItemStatus = function() {
    if (!activeEditingItemId) return;
    const isCurrentlyChecked = appState.checked[activeEditingItemId] || false;
    const newCheckedState = !isCurrentlyChecked;
    
    appState.checked[activeEditingItemId] = newCheckedState;
    
    // UI elements update
    const statusBtn = document.getElementById("drawer-status-btn");
    const statusText = document.getElementById("drawer-status-text");
    
    if (newCheckedState) {
        statusBtn.className = "status-btn checked";
        statusText.textContent = "Completed";
        
        // Auto stamp completion date
        if (!document.getElementById("date-completed").value) {
            document.getElementById("date-completed").value = new Date().toISOString().split('T')[0];
        }
    } else {
        statusBtn.className = "status-btn";
        statusText.textContent = "Not Started";
    }
    
    saveState();
    navigateTo(appState.currentView);
    lucide.createIcons();
};

// Save changes from drawer
window.saveDrawerData = function() {
    if (!activeEditingItemId) return;
    
    // Notes
    appState.notes[activeEditingItemId] = document.getElementById("learning-notes").value;
    
    // Dates
    if (!appState.dates[activeEditingItemId]) appState.dates[activeEditingItemId] = {};
    appState.dates[activeEditingItemId].started = document.getElementById("date-started").value;
    appState.dates[activeEditingItemId].completed = document.getElementById("date-completed").value;

    saveState();
    closeDrawer();
    navigateTo(appState.currentView);
    showToast("Changes saved successfully.");
};

// Backup Progress Data (Export JSON)
function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `personal_university_progress_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Progress exported successfully!");
}

// Restore Progress Data (Import JSON)
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            
            // Validate basic structure
            if (imported.checked && typeof imported.checked === 'object') {
                appState = {
                    ...appState,
                    ...imported
                };
                saveState();
                navigateTo(appState.currentView);
                showToast("Backup restored successfully!");
            } else {
                alert("Invalid backup file. Could not restore state.");
            }
        } catch (error) {
            console.error(error);
            alert("Error parsing backup file.");
        }
    };
    reader.readAsText(file);
    // Reset file input value
    event.target.value = "";
}
