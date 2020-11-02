var collections = {
    "News": {
        "Github": [{
            "name": "Hacker News",
            "url": "https://news.ycombinator.com/"
        },{
            "name": "Trending  repositories on GitHub today",
            "url": "https://github.com/trending"
        }]
    },
    "OS": {
        "操作系统": [{
                "name": "Operating System Tutorial - tutorialspoint",
                "url": "https://www.tutorialspoint.com/operating_system/index.htm"
            },{
                "name": "进程间通信&trade;",
                "url": "https://www.yiibai.com/ipc"
            }
        ],
        "Linux": [{
                "name": "The Linux Kernel Archives",
                "url": "https://www.kernel.org/"
            },{
                "name": "鸟哥的Linux私房菜",
                "url": "http://cn.linux.vbird.org/linux_basic/linux_basic.php"
            },{
                "name": "Linux入门教程 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/linux/"
            },{
                "name": "Official Ubuntu Documentation",
                "url": "https://help.ubuntu.com/"
            },{
                "name": "Unix中文教程&trade;",
                "url": "https://www.yiibai.com/unix"
            },{
                "name": "Unix/Linux系统调用&trade;",
                "url": "https://www.yiibai.com/unix_system_calls"
            },{
                "name": "Linux命令教程&trade;",
                "url": "https://www.yiibai.com/linux"
            }
        ],
        "Windows": [{
                "name": "Windows编程【C语言版】 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/u/window/"
            },{
                "name": "Windows编程入门 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/windows/"
            },{
                "name": "PyWin32 Documentation",
                "url": "http://timgolden.me.uk/pywin32-docs/contents.html"
            },{
                "name": "SDK教程 | C语言教程系列",
                "url": "http://www.quanxue.cn/QT_XiaoYa/SdkIndex.html"
            }
        ],
        "MFC": [{
        	"name": "MFC 桌面应用程序 | Microsoft Docs",
        	"url": "https://docs.microsoft.com/zh-cn/cpp/mfc/mfc-desktop-applications?view=vs-2019"
        },{
        	"name": "Windows32(MFC)教程",
        	"url": "http://www.quanxue.cn/QT_XiaoYa/MfcIndex.html"
        }],
    },
    "Web": {
        "Nginx": [{
                "name": "nginx 1.15 | nginx文档 : Code Examples",
                "url": "https://code-examples.net/zh-CN/docs/nginx/index"
            },{
                "name": "Nginx开发从入门到精通",
                "url": "https://docs.pythontab.com/nginx/nginx-book/"
            },{
                "name": "Nginx 入门指南_w3cschool",
                "url": "https://www.w3cschool.cn/nginx/"
            }
        ],
        "Jinja": [{
                "name": "Jinja2 中文手册",
                "url": "https://docs.pythontab.com/jinja/jinja2/"
            }
        ],
        "Tornado": [{
                "name": "Tornado Web Server &mdash; Tornado 6.0.2 documentation",
                "url": "http://www.tornadoweb.org/en/stable/index.html"
            },{
                "name": "《Introduction to Tornado》",
                "url": "https://docs.pythontab.com/tornado/introduction-to-tornado/"
            }
        ],
        "Django": [{
                "name": "Django Documentation - Django",
                "url": "https://docs.djangoproject.com/en/2.2/"
            },{
                "name": "Django 文档 - Django",
                "url": "https://docs.djangoproject.com/zh-hans/2.2"
            },{
                "name": "Django教程 - 菜鸟教程",
                "url": "https://www.runoob.com/django/django-tutorial.html"
            },{
                "name": "Django 中文文档",
                "url": "https://docs.pythontab.com/django/django1.5/"
            },{
                "name": "Django教程&trade;",
                "url": "https://www.yiibai.com/django"
            },{
                "name": "刘江的Django教程",
                "url": "http://www.liujiangblog.com/course/django/"
            },{
                "name": "Django教程_w3cschool",
                "url": "https://www.w3cschool.cn/django/"
            }
        ],
        "Flask": [{
                "name": "Flask 0.10.1 文档",
                "url": "http://docs.jinkan.org/docs/flask/"
            },{
                "name": "Flask 扩展文档汇总",
                "url": "https://wizardforcel.gitbooks.io/flask-extension-docs/content/"
            },{
                "name": "Flask-SocketIO  documentation",
                "url": "https://flask-socketio.readthedocs.io/en/latest/"
            },{
                "name": "使用 Python 和 Flask 设计 RESTful API",
                "url": "http://www.pythondoc.com/flask-restful/first.html"
            }
        ],
        "Javascript": [{
                "name": "JavaScript教程 - W3school",
                "url": "http://www.w3school.com.cn/js/index.asp"
            },{
                "name": "利用 Visual Studio 开发 JavaScript 和 TypeScript - Visual Studio",
                "url": "https://docs.microsoft.com/zh-cn/visualstudio/javascript/?view=vs-2019"
            },{
                "name": "JavaScript教程 - 菜鸟教程",
                "url": "https://www.runoob.com/js/js-tutorial.html"
            },{
                "name": "JavaScript教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/1022910821149312"
            },{
                "name": "Javascript教程&trade;",
                "url": "https://www.yiibai.com/javascript"
            }
        ],
        "JQuery": [{
                "name": "jQuery教程 - W3school",
                "url": "http://www.w3school.com.cn/jquery/index.asp"
            },{
                "name": "jQuery教程 - 菜鸟教程",
                "url": "https://www.runoob.com/jquery/jquery-tutorial.html"
            }
        ],
        "NodeJs": [{
                "name": "nodejs中文手册",
                "url": "https://docs.pythontab.com/nodejs/"
            },{
                "name": "Node.js教程&trade;",
                "url": "https://www.yiibai.com/nodejs/"
            }
        ],
        "ElectronJs": [{
                "name": "Electron Documentation",
                "url": "https://www.electronjs.org/docs"
            },{
                "name": "Electron 中文文档_w3cschool",
                "url": "https://www.w3cschool.cn/electronmanual/"
            }
        ],
        "Websocket": [{
                "name": "socket.io 快速入门教程",
                "url": "https://www.w3cschool.cn/socket/socket-ulbj2eii.html"
            }
        ],
        "Webpack": [{
                "name": "webpack",
                "url": "https://webpack.js.org/concepts/"
            },{
                "name": "webpack 中文文档(v4.15.1)",
                "url": "http://webpack.html.cn/"
            }
        ],
        "Vue.js": [{
                "name": "Vue.js教程 - 菜鸟教程",
                "url": "https://www.runoob.com/vue2/vue-tutorial.html"
            },{
                "name": "介绍 — Vue.js",
                "url": "https://cn.vuejs.org/v2/guide/index.html"
            },{
                "name": "快速入门：使用 Visual Studio 创建第一个 Vue.js 应用",
                "url": "https://docs.microsoft.com/zh-cn/visualstudio/javascript/quickstart-vuejs-with-nodejs?view=vs-2019"
            },{
                "name": "vue 手册_w3cschool",
                "url": "https://www.w3cschool.cn/aekdgs/"
            }
        ],
        "Layui": [{
                "name": "layui开发使用文档 - 入门指南",
                "url": "https://www.layui.com/doc/"
            },{
                "name": "layuiAdmin std - 通用后台管理模板系统（iframe标准版）",
                "url": "https://www.layui.com/admin/std/dist/views/"
            }
        ],
        "Bulma": [{
                "name": "Documentation | Bulma",
                "url": "https://bulma.io/documentation/"
            }
        ],
        "Docker": [{
                "name": "Docker Documentation | Docker Documentation",
                "url": "https://docs.docker.com/"
            },{
                "name": "Docker教程 - 菜鸟教程",
                "url": "https://www.runoob.com/docker/docker-tutorial.html"
            },{
                "name": "Docker从入门到实践_w3cschool",
                "url": "https://www.w3cschool.cn/reqsgr/"
            }
        ],
    },
    "Network": {
        "网络编程": [{
                    "name": "C/C++ socket编程教程 - C语言中文网",
                    "url": "http://c.biancheng.net/cpp/socket/"
                },{
                    "name": "Socket Programming in Python (Guide) – Real Python",
                    "url": "https://realpython.com/python-sockets/"
                },{
                    "name": "Socket编程&trade;",
                    "url": "https://www.yiibai.com/html/socket"
                },{
                    "name": "python高级与网络编程",
                    "url": "https://aceld.gitbooks.io/python/content/"
                },{
                    "name": "Network Programming in Python Tutorial | Studytonight",
                    "url": "https://www.studytonight.com/network-programming-in-python/"
                }
            ],
        "区块链": [{
                "name": "区块链教程&trade;",
                "url": "https://www.yiibai.com/blockchain/"
                },{
                    "name": "区块链技术快速入门教程",
                    "url": "http://c.biancheng.net/blockchain/"
                }
            ],
        "Tor": [{
                "name": "Tor Documentation - Tor Project",
                "url": "https://www.torproject.org/docs/documentation.html.en"
            }],
        "Tools": [{
                "name": "Windows Sysinternals - Windows Sysinternals | Microsoft Docs",
                "url": "https://docs.microsoft.com/en-us/sysinternals/"
            },{
                "name": "Burp Suite documentation",
                "url": "https://portswigger.net/burp/documentation"
            }],
        "Metasploit": [{
                "name": "Metasploit Framework",
                "url": "https://metasploit.help.rapid7.com/docs"
            },{
                "name": "Metasploit Framework - GitHub",
                "url": "https://github.com/rapid7/metasploit-framework/wiki"
            },{
                "name": "Introduction - Metasploit Unleashed",
                "url": "https://www.offensive-security.com/metasploit-unleashed/introduction/"
            },{
                "name": "Metasploit - Wikibooks, open books for an open world",
                "url": "https://en.wikibooks.org/wiki/Metasploit"
            }]
    },
    "Program": {
        "开发": [{
                    "name": "Developer Documentation : Code Examples",
                    "url": "https://code-examples.net/zh-CN/docs"
                },{
                    "name": "CTOLib码库",
                    "url": "https://www.ctolib.com/"
                },{
                    "name": "编程入门教程_w3cschool极客教程",
                    "url": "https://www.w3cschool.cn/tutorial"
                },{
                    "name": "Home - low level",
                    "url": "https://low-level.readthedocs.io/en/latest/"
                }
            ],
        "数据结构与算法": [{
                    "name": "数据结构与算法教程 - 数据结构C语言版教程",
                    "url": "http://data.biancheng.net/"
                },{
                    "name": "数据结构与算法系列 目录 - 如果天空不死 - 博客园",
                    "url": "https://www.cnblogs.com/skywang12345/p/3603935.html"
                }
            ],
        "设计模式": [{
                "name": "设计模式 - 菜鸟教程",
                "url": "https://www.runoob.com/design-pattern/design-pattern-tutorial.html"
            },{
                "name": "Java设计模式详解 - 微学苑",
                "url": "http://www.weixueyuan.net/java/shejimoshi/"
            }
        ],
        "设计": [{
                "name": "UML教程&trade;",
                "url": "https://www.yiibai.com/uml"
            }
        ],
        "Git": [{
                "name": "Pro Git book",
                "url": "https://docs.pythontab.com/github/gitbook/"
            },{
                "name": "Git教程 - 菜鸟教程",
                "url": "https://www.runoob.com/git/git-tutorial.html"
            },{
                "name": "Git教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/896043488029600"
            },{
                "name": "Git教程&trade;",
                "url": "https://www.yiibai.com/git"
            }
        ],
        "SVN": [{
                "name": "SVN教程 - 菜鸟教程",
                "url": "https://www.runoob.com/svn/svn-tutorial.html"
            },{
                "name": "TortoiseSVN教程&trade;",
                "url": "https://www.yiibai.com/svn"
            },{
                "name": "svn handbook",
                "url": "http://shouce.jb51.net/svn/index.html"
            }
        ],
        "数据库": [{
                "name": "SQL教程 - 菜鸟教程",
                "url": "https://www.runoob.com/sql/sql-tutorial.html"
            },{
                "name": "SQL教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/1177760294764384"
            }
        ],
        "MySQL": [{
                "name": "MySQL教程 - 菜鸟教程",
                "url": "https://www.runoob.com/mysql/mysql-tutorial.html"
            },{
                "name": "MySQL教程&trade;",
                "url": "https://www.yiibai.com/mysql/"
            },{
                "name": "MySQL Connector/NET 8.0 API Reference",
                "url": "https://dev.mysql.com/doc/dev/connector-net/8.0/html/connector-net-x-devapi-reference.htm"
            }
        ],
        "MongoDB": [{
                "name": "MongoDB教程 - 菜鸟教程",
                "url": "https://www.runoob.com/mongodb/mongodb-tutorial.html"
            },{
                "name": "MongoDB教程 &mdash; Python 1.0.0 documentation",
                "url": "https://mongodbdocs.readthedocs.io/en/latest/"
            },{
                "name": "MongoDB教程_w3cschool",
                "url": "https://www.w3cschool.cn/mongodb/"
            },{
                "name": "MongoDB .NET Driver API Documentation",
                "url": "http://mongodb.github.io/mongo-csharp-driver/2.8/apidocs/html/R_Project_CSharpDriverDocs.htm"
            }
        ],
        "PostgreSQL": [{
                "name": "PostgreSQL教程&trade;",
                "url": "https://www.yiibai.com/postgresql/"
            },{
                "name": "PostgreSQL: Documentation",
                "url": "https://www.postgresql.org/docs/"
            }
        ],
        "Redis": [{
                "name": "Redis教程 - 菜鸟教程",
                "url": "https://www.runoob.com/redis/redis-tutorial.html"
            },{
                "name": "Redis 设计与实现",
                "url": "https://docs.pythontab.com/redis/redisbook/"
            }
        ],
        "Elasticsearch": [{
                "name": "Elasticsearch 权威指南（中文版）",
                "url": "http://wiki.jikexueyuan.com/project/elasticsearch-definitive-guide-cn/"
            }
        ],
        "SQLite": [{
                "name": "SQLite教程",
                "url": "http://wiki.jikexueyuan.com/project/sqlite/"
            },{
                "name": "SQLite Documentation",
                "url": "https://sqlite.org/docs.html"
            }
        ],
        "机器学习": [{
                "name": "Python机器学习",
                "url": "https://ljalphabeta.gitbooks.io/python-/content/"
            },{
                "name": "TensorFlow 官方文档中文版",
                "url": "https://docs.pythontab.com/tensorflow/"
            },{
                "name": "TensorFlow Tutorial - tutorialspoint",
                "url": "https://www.tutorialspoint.com/tensorflow/index.htm"
            }
        ],
        "Data Science": [{
                "name": "Learn Data Science - Data Science Tutorials - DataFlair",
                "url": "https://data-flair.training/blogs/data-science-tutorials-home/"
            },{
                "name": "刘江的数据分析教程",
                "url": "http://www.liujiangblog.com/course/data/"
            }
        ],
        "GUI_Qt": [{
                "name": "Qt Documentation",
                "url": "https://doc.qt.io/"
            },{
                "name": "Qt Reference Pages | Qt 5.14 | CPP",
                "url": "https://doc.qt.io/qt-5/reference-overview.html"
            },{
                "name": "Index of / Qt",
                "url": "http://77.86.229.90/",
            },{
                "name": "Qt 学习之路",
                "url": "http://wiki.jikexueyuan.com/project/learn-road-qt/"
            }
        ],
        "GUI_PyQt": [{
                "name": "Qt for Python",
                "url": "https://doc.qt.io/qtforpython/index.html"
            },{
                "name": "PyQt5 中文教程",
                "url": "https://maicss.gitbooks.io/pyqt5/content/"
            },{
                "name": "PyQt5 tutorial - learn GUI programming with Python and PyQt5",
                "url": "http://zetcode.com/gui/pyqt5/"
            }
        ],
        "编译": [{
                "name": "CMake Tutorial",
                "url": "https://cmake.org/cmake/help/latest/guide/tutorial/index.html"
            },{
                "name": "GNU make",
                "url": "https://www.gnu.org/software/make/manual/make.html"
            },{
                "name": "Unix Makefile Tutorial - Tutorialspoint",
                "url": "https://www.tutorialspoint.com/makefile/index.htm"
            }
        ],
        "DEBUG": [{
                "name": "Top (Debugging with GDB)",
                "url": "https://sourceware.org/gdb/onlinedocs/gdb/"
            },{
                "name": "Introduction &#xB7; Radare2 Book",
                "url": "https://radare.gitbooks.io/radare2book/content/"
            }
        ],
        "Assembly": [{
                "name": "Introduction to x64 Assembly",
                "url": "https://software.intel.com/content/www/us/en/develop/articles/introduction-to-x64-assembly.html"
            },{
                "name": "Microsoft Macro Assembler reference",
                "url": "https://docs.microsoft.com/en-us/cpp/assembler/masm/microsoft-macro-assembler-reference?view=vs-2019"
            },{
                "name": "NASM - The Netwide Assembler",
                "url": "https://www.nasm.us/xdoc/2.14.02/html/nasmdoc0.html"
            },{
                "name": "NASM 示例 - cee.github.io",
                "url": "http://cee.github.io/NASM-Tutorial/"
            },{
                "name": "Assembly/汇编教程&trade;",
                "url": "https://www.yiibai.com/html/assembly/"
            },{
                "name": "Assembly Programming Tutorial - tutorialspoint",
                "url": "https://www.tutorialspoint.com/assembly_programming/index.htm"
            },{
                "name": "汇编语言入门教程：汇编语言程序设计指南（精讲版）",
                "url": "http://c.biancheng.net/asm/"
            },{
                "name": "x86 and amd64 instruction reference",
                "url": "https://www.felixcloutier.com/x86/index.html"
            },{
                "name": "Mirror of: Into the Void: x86 Instruction Set Reference",
                "url": "https://c9x.me/x86/"
            },{
                "name": "80x86 instruction set",
                "url": "http://linuxcompressed.sourceforge.net/linux24-cc/intel/intel.html"
            },{
                "name": "i386-manual Table of Contents",
                "url": "https://nju-projectn.github.io/i386-manual/toc.htm"
            },{
                "name": "geek edition | X86 Opcode and Instruction Reference 1.12",
                "url": "http://ref.x86asm.net/geek.html#x68"
            }
        ],
        "C": [{
                "name": "C语言入门教程 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/u/jiaocheng/"
            },{
                "name": "C语言和内存 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/u/c20/"
            },{
                "name": "C语言模块化开发（多文件编程） - C语言中文网",
                "url": "http://c.biancheng.net/cpp/u/c16/"
            },{
                "name": "C语言教程 - 菜鸟教程",
                "url": "https://www.runoob.com/cprogramming/c-tutorial.html"
            },{
                "name": "C语言教程 中文版",
                "url": "http://wiki.jikexueyuan.com/project/c/"
            },{
                "name": "C语言进阶教程_Real C_极客学院 Wiki",
                "url": "http://wiki.jikexueyuan.com/project/c-gitbook/"
            },{
                "name": "C Programming Tutorial - tutorialspoint",
                "url": "https://www.tutorialspoint.com/cprogramming/index.htm"
            },{
                "name": "C Standard Library Reference Tutorial - tutorialspoint",
                "url": "https://www.tutorialspoint.com/c_standard_library/index.htm"
            },{
                "name": "C 中文开发手册 - 开发者手册 - 云+社区 - 腾讯云",
                "url": "https://cloud.tencent.com/developer/doc/1023"
            },{
                "name": "Learn C (Introduction and Tutorials to C Programming)",
                "url": "https://www.programiz.com/c-programming"
            },{
                "name": "C | C编程语言 : Code Examples",
                "url": "https://code-examples.net/zh-CN/docs/c/index"
            },{
                "name": "介绍 | 手把手教你做一个 C 语言编译器",
                "url": "https://www.ctolib.com/docs//sfile/diy-c-compiler/index.html"
            },{
                "name": "Learn C Programming Language | C Tutorial | Studytonight",
                "url": "https://www.studytonight.com/c/"
            },{
                "name": "C语言教程 | C语言教程系列",
                "url": "http://www.quanxue.cn/QT_XiaoYa/CLangIndex.html"
            },{
                "name": "Category:C (programming language) libraries",
                "url": "https://en.wikipedia.org/wiki/Category:C_(programming_language)_libraries"
            }
        ],
        "C++": [{
                "name": "C++入门教程 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/biancheng/cpp/rumen/"
            },{
                "name": "C++教程 - 菜鸟教程",
                "url": "https://www.runoob.com/cplusplus/cpp-tutorial.html"
            },{
                "name": "C++ Programming Language - GeeksforGeeks",
                "url": "https://www.geeksforgeeks.org/c-plus-plus/"
            },{
                "name": "C++ Tutorial - tutorialspoint",
                "url": "https://www.tutorialspoint.com/cplusplus/index.htm"
            },{
                "name": "C++教程&trade;",
                "url": "https://www.yiibai.com/cplusplus/"
            },{
                "name": "C++标准库教程&trade;",
                "url": "https://www.yiibai.com/cpp_standard_library"
            },{
                "name": "Learn C++ (Introduction and Tutorials to C++ Programming)",
                "url": "https://www.programiz.com/cpp-programming"
            },{
                "name": "C++ | C ++编程语言 : Code Examples",
                "url": "https://code-examples.net/zh-CN/docs/cpp/index"
            },{
                "name": "C++资源框架速查表 - C/C++开发社区 | CTOLib码库",
                "url": "https://www.ctolib.com/cheatsheets-c++-resource-framework.html"
            },{
                "name": "Highscore - The Boost C++ Libraries",
                "url": "http://zh.highscore.de/cpp/boost/"
            },{
                "name": "介绍 | Effective C++ 中文版",
                "url": "https://www.ctolib.com/docs//sfile/effective-cpp/index.html"
            },{
                "name": "Visual Studio 中的 C++ - Microsoft Docs",
                "url": "https://docs.microsoft.com/zh-cn/cpp/overview/visual-cpp-in-visual-studio"
            },{
                "name": "C/C++语言和标准库参考",
                "url": "https://docs.microsoft.com/zh-cn/cpp/cpp/c-cpp-language-and-standard-libraries"
            },{
                "name": "C++ Tutorial | Studytonight",
                "url": "https://www.studytonight.com/cpp/"
            },{
                "name": "C++语言教程 | C语言教程系列",
                "url": "http://www.quanxue.cn/QT_XiaoYa/CppIndex.html"
            }
        ],
        "Autoit": [{
                "name": "autoit 在线手册中文版_脚本之家",
                "url": "https://www.jb51.net/shouce/autoit/"
            }
        ],
        "Shell": [{
                "name": "Shell教程_Shell开发中文手册 - 极客学院Wiki",
                "url": "http://wiki.jikexueyuan.com/project/shell-tutorial/"
            },{
                "name": "Linux Shell脚本教程 - C语言中文网",
                "url": "http://c.biancheng.net/cpp/shell/"
            },{
                "name": "shell教程&trade;",
                "url": "https://www.yiibai.com/shell"
            },{
                "name": "Shell 编程范例_w3cschool",
                "url": "https://www.w3cschool.cn/shellbook/"
            },{
                "name": "shell在线中文手册abs,shell中文教程,shell中文教程 - 脚本之家",
                "url": "http://shouce.jb51.net/shell/index.html"
            },{
                "name": "Bash 脚本教程",
                "url": "https://wangdoc.com/bash/index.html"
            },
        ],
        "PowerShell": [{
                "name": "PowerShell Scripting | Microsoft Docs",
                "url": "https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-6"
            }
        ],
        "DOS": [{
                "name": "DOS命令学习手册_w3cschool",
                "url": "https://www.w3cschool.cn/dosmlxxsc1/"
            }
        ],
        "DotNet": [{
                "name": "Download .NET Framework | Free official downloads",
                "url": "https://dotnet.microsoft.com/download/dotnet-framework"
            },{
                "name": "简介 - ASP.NET 编程指南_教程_.NET开发社区",
                "url": "https://www.ctolib.com/docs-asp-net-c-index"
            },
        ],
        "VB": [{
                "name": "Visual Basic | Microsoft Docs",
                "url": "https://docs.microsoft.com/en-us/dotnet/visual-basic/index"
            },{
                "name": "教程：Visual Basic 入门 - Visual Studio",
                "url": "https://docs.microsoft.com/zh-cn/visualstudio/get-started/visual-basic/tutorial-console?view=vs-2019"
            }
        ],
        "C#": [{
                "name": "C# 指南 - Microsoft Docs",
                "url": "https://docs.microsoft.com/zh-cn/dotnet/csharp/"
            },{
                "name": "利用 Visual Studio 开发 C# - Visual Studio",
                "url": "https://docs.microsoft.com/zh-cn/visualstudio/get-started/csharp/?view=vs-2019"
            },{
                "name": "C#教程 - 菜鸟教程",
                "url": "https://www.runoob.com/csharp/csharp-tutorial.html"
            },{
                "name": "简介 - C# 入门手册_教程_.NET开发社区",
                "url": "https://www.ctolib.com/docs-csharp-c-index"
            },{
                "name": "C# (CSharp) Code Examples - HotExamples",
                "url": "https://csharp.hotexamples.com/"
            },{
                "name": "c# .net,中文手册,在线手册 - 脚本之家",
                "url": "http://shouce.jb51.net/net/index.html"
            }
        ],
        "GoLang": [{
                "name": "Go教程 - 菜鸟教程",
                "url": "https://www.runoob.com/go/go-tutorial.html"
            },{
                "name": "Go入门指南",
                "url": "http://wiki.jikexueyuan.com/project/the-way-to-go/"
            },{
                "name": "Go 中文开发手册 - 开发者手册 - 云+社区 - 腾讯云",
                "url": "https://cloud.tencent.com/developer/doc/1101"
            },{
                "name": "Go 1.11 | G编程语言 : Code Examples",
                "url": "https://code-examples.net/zh-CN/docs/go/index"
            },{
                "name": "Go 语言中文开源图书、资料或文档",
                "url": "https://books.studygolang.com/"
            },{
                "name": "Go语言标准库",
                "url": "https://books.studygolang.com/The-Golang-Standard-Library-by-Example/"
            },{
                "name": "Documentation - The Go Programming Language",
                "url": "https://golang.org/doc/"
            },{
                "name": "Downloads - The Go Programming Language",
                "url": "https://golang.org/dl/"
            }
        ],
        "Java": [{
                "name": "Java入门教程 - 微学苑",
                "url": "http://www.weixueyuan.net/java/rumen/"
            },{
                "name": "Java教程 - 菜鸟教程",
                "url": "https://www.runoob.com/java/java-tutorial.html"
            },{
                "name": "Java教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/1252599548343744"
            },{
                "name": "Java 提高篇",
                "url": "http://wiki.jikexueyuan.com/project/java-enhancement/"
            },{
                "name": "Learn Java (Introduction and Tutorials to Java Programming)",
                "url": "https://www.programiz.com/java-programming"
            }
        ],
        "Android": [{
                "name": "Android基础入门教程 - 菜鸟教程",
                "url": "https://www.php.net/manual/en/index.php"
            },{
                "name": "Android开发入门教程：7天玩转安卓APP开发",
                "url": "http://c.biancheng.net/android/"
            }
        ],
        "PHP": [{
                "name": "PHP: PHP Manual - Manual",
                "url": "https://www.runoob.com/w3cnote/android-tutorial-intro.html"
            },{
                "name": "windows.php.net - /downloads/releases/archives/",
                "url": "https://windows.php.net/downloads/releases/archives/"
            }
        ],
        "Ruby": [{
                "name": "Ruby Documentation",
                "url": "https://www.ruby-lang.org/en/documentation/"
            },{
                "name": "Wiki · Ruby China",
                "url": "https://ruby-china.org/wiki"
            },{
                "name": "Ruby-Doc.org: Documenting the Ruby Language",
                "url": "https://ruby-doc.org/"
            },{
                "name": "Ruby Programming - Wikibooks, open books for an open world",
                "url": "https://en.wikibooks.org/wiki/Ruby_Programming"
            },{
                "name": "Ruby教程&trade;",
                "url": "https://www.yiibai.com/ruby"
            },{
                "name": "Ruby 教程 | 菜鸟教程",
                "url": "https://www.runoob.com/ruby/ruby-tutorial.html"
            },{
                "name": "Ruby 要点速查表 - Ruby开发社区 | CTOLib码库",
                "url": "https://www.ctolib.com/cheatsheets-Ruby-Essentials.html"
            },{
                "name": "Ruby开发教程 | 码库CTOLib",
                "url": "https://www.ctolib.com/ruby/docs/"
            },{
                "name": "Ruby 2.4 中文开发手册 - 开发者手册 - 云+社区 - 腾讯云",
                "url": "https://cloud.tencent.com/developer/doc/1211"
            },{
                "name": "Summary - 《RubyFu(英文)》 - 书栈网 · BookStack",
                "url": "https://www.bookstack.cn/read/RubyFu/SUMMARY.md"
            },{
                "name": "Ruby用户指南,Ruby中文文档",
                "url": "https://www.php.cn/manual/view/20139.html"
            },{
                "name": "ruby,中文手册,在线手册 - 脚本之家",
                "url": "http://shouce.jb51.net/ruby/"
            },{
                "name": "pack (Array) - APIdock Ruby",
                "url": "https://apidock.com/ruby/Array/pack"
            },{
                "name": "Ruby参考手册 - pack模板字符串",
                "url": "http://shouce.jb51.net/ruby/90.html"
            }
        ],
        "Python": [{
                "name": "Python Documentation contents &#8212; Python 3.7.0a2 documentation",
                "url": "https://python.readthedocs.io/en/latest/contents.html"
            },{
                "name": "Python Cookbook 3rd Edition Documentation",
                "url": "https://python3-cookbook.readthedocs.io/zh_CN/latest/index.html"
            },{
                "name": "Python3教程 - 菜鸟教程",
                "url": "https://www.runoob.com/python3/python3-tutorial.html"
            },{
                "name": "Python教程 - 廖雪峰的官方网站",
                "url": "https://www.liaoxuefeng.com/wiki/1016959663602400"
            },{
                "name": "Python Tutorial - tutorial spoint",
                "url": "https://www.tutorialspoint.com/python/"
            },{
                "name": "Python编程时光 &mdash; MING&#39;s BLOG 1.0.0 文档",
                "url": "http://python-online.cn/zh_CN/latest/"
            },{
                "name": "Python进阶",
                "url": "https://docs.pythontab.com/interpy/"
            },{
                "name": "Python 中文开发手册 - 开发者手册 - 云+社区 - 腾讯云",
                "url": "https://cloud.tencent.com/developer/doc/1198"
            },{
                "name": "Python 资源大全中文版 - jobbole/awesome-python-cn",
                "url": "https://github.com/jobbole/awesome-python-cn"
            },{
                "name": "利用 Visual Studio 开发 Python",
                "url": "https://docs.microsoft.com/zh-cn/visualstudio/python/?view=vs-2019"
            },{
                "name": "Python Tutorials for Beginners - Learn Python Programming from scratch - DataFlair",
                "url": "https://data-flair.training/blogs/python-tutorials-home/"
            },{
                "name": "Python高级教程 - 刘江的Python教程",
                "url": "http://www.liujiangblog.com/course/python/1"
            },{
                "name": "Pythontic.com - Learn the Python Programming Language",
                "url": "https://pythontic.com/"
            },{
                "name": "Learn Python (Programming Tutorial for Beginners)",
                "url": "https://www.programiz.com/python-programming"
            },{
                "name": "The Hitchhiker’s Guide to Python! &#8212; The Hitchhiker&#39;s Guide to Python",
                "url": "https://docs.python-guide.org/"
            },{
                "name": "Python 3.6 | Python : Code Examples",
                "url": "https://code-examples.net/zh-CN/docs/python~3.6/index"
            },{
                "name": "Python开发资源速查表 - Python开发社区 | CTOLib码库",
                "url": "https://www.ctolib.com/cheatsheets-Awesome-Python.html"
            },{
                "name": "Python 中文学习大本营",
                "url": "http://www.pythondoc.com/"
            },{
                "name": "Learn Python (Programming Tutorial for Beginners)",
                "url": "https://www.programiz.com/python-programming"
            },{
                "name": "介绍 - 《Python 3.8 标准库参考》 - 书栈网 · BookStack",
                "url": "https://www.bookstack.cn/read/python-stdlib-3.8/bf0cf5e404de4874.md"
            },{
                "name": "python,中文手册,在线手册 - 脚本之家",
                "url": "http://shouce.jb51.net/python/index.html"
            },{
                "name": "Python 资源大全中文版 - 云+社区 - 腾讯云",
                "url": "https://cloud.tencent.com/developer/article/1108114"
            },{
                "name": "Python Tutorial | Studytonight",
                "url": "https://www.studytonight.com/python/"
            },{
                "name": "Python Tutorial - JournalDev",
                "url": "https://www.journaldev.com/python-tutorial"
            },{
                "name": "Practical Python Programming | practical-python",
                "url": "https://dabeaz-course.github.io/practical-python/Notes/Contents.html"
            },{
                "name": "Download Python | Python.org",
                "url": "https://www.python.org/downloads/"
            }
        ],
        "PythonAbout": [{
                "name": "Six: Python 2 and 3 Compatibility Library &mdash; six 1.12.0 documentation",
                "url": "https://six.readthedocs.io/"
            },{
                "name": "Full pytest documentation &#8212; pytest documentation",
                "url": "https://docs.pytest.org/en/latest/contents.html"
            },{
                "name": "PyInstaller Manual &mdash; PyInstaller 3.5 documentation",
                "url": "https://pyinstaller.readthedocs.io/en/stable/index.html"
            },{
                "name": "namedstruct’s documentation",
                "url": "https://namedstruct.readthedocs.io/en/latest/"
            },{
                "name": "Python渗透测试工具都有哪些？ - 云+社区 - 腾讯云",
                "url": "https://cloud.tencent.com/developer/article/1039351"
            },{
                "name": "灰帽 Python 之旅",
                "url": "https://wizardforcel.gitbooks.io/grey-hat-python/content/"
            }
        ],
        "Spider": [{
                "name": "Requests: HTTP for Humans™ &#8212; Requests 2.22.0 documentation",
                "url": "https://2.python-requests.org/en/master/"
            },{
                "name": "Beautiful Soup 4.4.0 文档",
                "url": "https://docs.pythontab.com/beautifulsoup4/"
            },{
                "name": "为什么要学习爬虫 · 网络爬虫教程",
                "url": "https://piaosanlang.gitbooks.io/spiders/content/01day/section1.1.html"
            }
            
        ],
        "Scrapy": [{
                "name": "Scrapy 1.6.0 documentation",
                "url": "https://docs.scrapy.org/en/latest/"
            },{
                "name": "Scrapy 0.24.6 文档",
                "url": "https://scrapy-chs.readthedocs.io/zh_CN/0.24/index.html"
            },
        ],
        "Scapy": [{
                "name": "Scapy 2.4.3 documentation",
                "url": "https://scapy.readthedocs.io/en/latest/"
            }
        ],
        "Image": [{
            "name": "Pillow &mdash; Pillow (PIL Fork) 6.1.0.dev0 documentation",
            "url": "https://pillow.readthedocs.io/en/latest/index.html"
        }],
        "Celery": [{
                "name": "Celery - Distributed Task Queue &#8212; Celery 4.3.0 documentation",
                "url": "http://docs.celeryproject.org/en/latest/"
            },{
                "name": "Celery - 分布式任务队列 &mdash; Celery 3.1.7 文档",
                "url": "http://docs.jinkan.org/docs/celery/"
            },
        ]
    },
    "编码": {
        "密码学": [{
            "name": "PyCryptodome 3.9a0 documentation",
            "url": "https://pycryptodome.readthedocs.io/en/latest/index.html"
        },{
            "name": "pyca/cryptography &mdash; Cryptography 2.9.dev1 documentation",
            "url": "https://cryptography.io/en/latest/"
        },{
            "name": "pyOpenSSL’s documentation",
            "url": "https://www.pyopenssl.org/en/stable/"
        }],
        "工具": [{
            "name": "HashKiller.co.uk - Huge Online Hash Database and Community, Free Hash Cracker, Online Hash Cracking",
            "url": "https://hashkiller.co.uk/"
        }]
    },
    "安全": {
        "语言": [{
            "name": "Python安全编程教程",
            "url": "https://wizardforcel.gitbooks.io/py-sec-tutorial/content/index.html"
        },{
            "name": "Hacking-With-Golang",
            "url": "https://github.com/re4lity/Hacking-With-Golang/blob/master/README.md"
        }],
        "CVE": [{
            "name": "CVE - Download CVE List",
            "url": "http://cve.mitre.org/data/downloads/index.html"
        },{
            "name": "Browse cve vulnerabilities by date",
            "url": "https://www.cvedetails.com/browse-by-date.php"
        },{
            "name": "漏洞列表 - 知道创宇 Seebug 漏洞平台",
            "url": "https://www.seebug.org/vuldb/vulnerabilities"
        }],
        "CTF": [{
                "name": "CTFtime.org / All about CTF (Capture The Flag)",
                "url": "https://ctftime.org/event/list/"
            },{
                "name": "CTF-All-In-One 《CTF 竞赛入门指南》",
                "url": "https://firmianay.gitbooks.io/ctf-all-in-one/content/"
            },{
                "name": "CTF Test - szysec/ctftest",
                "url": "https://github.com/szysec/ctftest/blob/master/readme.md"
            },{
                "name": "Summary - 《CTF 竞赛入门指南(CTF All In One)》 - 书栈网 · BookStack",
                "url": "https://www.bookstack.cn/read/CTF-All-In-One/SUMMARY.md"
            },{
                "name": "CTF Field Guide",
                "url": "https://trailofbits.github.io/ctf/"
            },{
                "name": "CTF 领域指南",
                "url": "https://wizardforcel.gitbooks.io/ctf-field-guide/content/"
            },{
                "name": "Resources - CTF Wiki",
                "url": "https://ctf-wiki.github.io/ctf-wiki/introduction/resources/"
            }
        ],
        "CTF Writeups": [{
            "name": "VulnHub/ctf-writeups: CTF write-ups from the VulnHub CTF Team",
            "url": "https://github.com/VulnHub/ctf-writeups"
        }],
        "Pwn": [{
                "name": "binjitsu &mdash; binjitsu 2.2.0 documentation",
                "url": "https://binjitsu.readthedocs.io"
            },{
                "name": "pwntools &mdash; pwntools 3.12.1 documentation",
                "url": "https://pwntools.readthedocs.io/en/stable/"
            },{
                "name": "pwntools &mdash; pwntools 3.12.0dev 文档",
                "url": "https://pwntools-docs-zh.readthedocs.io/zh_CN/dev/index.html"
            }
        ],
        "工具": [{
                "name": "看雪知识库 - 看雪学院",
                "url": "https://www.kanxue.com/chm.htm"
            }, {
                "name": "爱盘 - 在线破解工具包",
                "url": "https://down.52pojie.cn/"
            }, {
                "name": "看雪工具",
                "url": "https://tools.pediy.com/"
            }, {
                "name": "exelab ::: Download cracker tools, disassemblers, debuggers",
                "url": "https://exelab.ru/download.php"
            }
        ],
        "教程": [{
                "name": "专注 APT 攻击与防御 - Micro8 系列教程",
                "url": "https://www.bookstack.cn/read/Micro8/README.md"
            }, {
                "name": "Red Teaming Experiments",
                "url": "https://ired.team/"
            }
        ],
    },
    "Other": {
        "Chrome": [{
            "name": "Chrome 开发工具指南_w3cschool",
            "url": "https://www.w3cschool.cn/chromedevtools/"
        },{
            "name": "Google Chrome Older Versions Download (Windows, Linux & Mac)",
            "url": "https://www.slimjet.com/chrome/google-chrome-old-version.php"
        }],
        "Firefox": [{
            "name": "Index of /pub/firefox/releases/",
            "url": "http://ftp.mozilla.org/pub/firefox/releases/"
        }],
        "Format": [{
            "name": "Markdown 语法说明_w3cschool",
            "url": "https://www.w3cschool.cn/markdownyfsm/"
        }],
        "Sites": [{
            "name": "Python Twitter 3.4.2 documentation",
            "url": "https://python-twitter.readthedocs.io/en/latest/"
        },{
            "name": "Python Telegram Bot 11.1.0 documentation",
            "url": "https://python-telegram-bot.readthedocs.io/en/stable/"
        }],
        "Software": [{
            "name": "Package Control Download",
            "url": "https://github.com/wbond/package_control/releases"
        }],
        "Snippet": [{
            "name": "Linux Snippet",
            "url": "../static/doc/linux_snippet.md"
        },{
            "name": "Windows Snippet",
            "url": "../static/doc/windows_snippet.md"
        }],
        "Github": [{
            "name": "关于 | RSSHub",
            "url": "https://docs.rsshub.app/"
        }]
    }
}
