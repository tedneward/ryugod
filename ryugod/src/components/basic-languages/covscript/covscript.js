/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '#',
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};
export var language = {
    defaultToken: 'invalid',
    tokenPostfix: '.csc',
    keywords: [
        'block',
        'break',
        'case',
        'catch',
        'clone',
        'continue',
        'default',
        'do',
        'duplicate',
        'else',
        'end',
        'equal',
        'finalize',
        'for',
        'foreach',
        'if',
        'import',
        'initialize',
        'loop',
        'move',
        'namespace',
        'override',
        'package',
        'range',
        'return',
        'swap',
        'switch',
        'throw',
        'to_integer',
        'to_string',
        'try',
        'type',
        'until',
        'using',
        'while',
    ],
    builtins: [
        'context',
        'range',
        'to_integer',
        'to_string',
        'type',
        'clone',
        'move',
        'swap',
        'is_a',
        'exception',
        'iostream',
        'system',
        'runtime',
        'math',
        'context',
        'range',
        'to_integer',
        'to_string',
        'type',
        'clone',
        'move',
        'swap',
        'is_a',
        'exception',
        'iostream',
        'system',
        'runtime',
        'math',
        'get',
        'set',
        'next',
        'next_n',
        'prev',
        'prev_n',
        'data',
        'iterator',
        'at',
        'front',
        'back',
        'begin',
        'end',
        'empty',
        'size',
        'clear',
        'insert',
        'erase',
        'push_front',
        'pop_front',
        'push_back',
        'pop_back',
        'sort',
        'to_hash_set',
        'to_hash_map',
        'to_list',
        'is_integer',
        'is_float',
        'ntoi',
        'ntof',
        'isalnum',
        'isalpha',
        'islower',
        'isupper',
        'isdigit',
        'iscntrl',
        'isgraph',
        'isspace',
        'isblank',
        'isprint',
        'ispunct',
        'tolower',
        'toupper',
        'from_ascii',
        'add_var',
        'empty',
        'size',
        'clear',
        'insert',
        'erase',
        'exist',
        'intersect',
        'merge',
        'subtract',
        'empty',
        'size',
        'clear',
        'insert',
        'erase',
        'at',
        'exist',
        'istream',
        'ostream',
        'seekdir',
        'openmode',
        'start',
        'finish',
        'present',
        'in',
        'bin_in',
        'out',
        'bin_out',
        'app',
        'bin_app',
        'char_buff',
        'fstream',
        'ifstream',
        'ofstream',
        'setprecision',
        'get_istream',
        'get_ostream',
        'get_string',
        'get',
        'peek',
        'unget',
        'getline',
        'tell',
        'seek',
        'seek_from',
        'good',
        'eof',
        'input',
        'ignore',
        'put',
        'tell',
        'seek',
        'seek_from',
        'flush',
        'good',
        'print',
        'println',
        'next',
        'prev',
        'data',
        'iterator',
        'front',
        'back',
        'begin',
        'end',
        'empty',
        'size',
        'clear',
        'insert',
        'erase',
        'push_front',
        'pop_front',
        'push_back',
        'pop_back',
        'remove',
        'reverse',
        'unique',
        'sort',
        'max',
        'min',
        'integer_max',
        'integer_min',
        'float_max',
        'float_min',
        'inf',
        'nan',
        'pi',
        'e',
        'constants',
        'abs',
        'ln',
        'log10',
        'log',
        'sin',
        'cos',
        'tan',
        'asin',
        'acos',
        'atan',
        'sqrt',
        'root',
        'pow',
        'min',
        'max',
        'rand',
        'randint',
        'first',
        'second',
        'sec',
        'min',
        'hour',
        'wday',
        'mday',
        'yday',
        'mon',
        'year',
        'is_dst',
        'unixtime',
        'consumer',
        'push',
        'pop',
        'clear',
        'touch',
        'size',
        'empty',
        'time_type',
        'std_version',
        'get_sdk_path',
        'get_import_path',
        'info',
        'time',
        'local_time',
        'utc_time',
        'delay',
        'exception',
        'hash',
        'build',
        'solve',
        'cmd_args',
        'import',
        'source_import',
        'argument_count',
        'add_literal',
        'get_current_dir',
        'wait_for',
        'wait_until',
        'await',
        'await_s',
        'create_co',
        'create_co_s',
        'destroy_co',
        'resume',
        'yield',
        'channel',
        'build',
        'solve',
        'cmd_args',
        'import',
        'source_import',
        'add_literal',
        'link_var',
        'unlink_var',
        'assign',
        'append',
        'insert',
        'erase',
        'replace',
        'substr',
        'find',
        'rfind',
        'cut',
        'empty',
        'clear',
        'size',
        'tolower',
        'toupper',
        'to_number',
        'split',
        'terminal_width',
        'terminal_height',
        'gotoxy',
        'echo',
        'clrscr',
        'getch',
        'kbhit',
        'copy',
        'rename',
        'remove',
        'exist',
        'ctime',
        'mtime',
        'can_read',
        'can_write',
        'can_execute',
        'unknown',
        'fifo',
        'sock',
        'chr',
        'dir',
        'blk',
        'reg',
        'lnk',
        'name',
        'type',
        'type',
        'info',
        'separator',
        'delimiter',
        'scan',
        'copy',
        'rename',
        'remove',
        'exist',
        'is_file',
        'is_directory',
        'mkdir',
        'mkdir_p',
        'chmod',
        'chmod_r',
        'console',
        'file',
        'path',
        'in',
        'out',
        'run',
        'getenv',
        'exit',
        'is_platform_windows',
        'is_platform_linux',
        'is_platform_darwin',
        'is_platform_unix',
    ],
    typeKeywords: [
        'and',
        'as',
        'class',
        'constant',
        'false',
        'function',
        'gcnew',
        'global',
        'is',
        'link',
        'local',
        'new',
        'not',
        'null',
        'or',
        'self',
        'struct',
        'this',
        'true',
        'typeid',
        'var',
    ],
    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },
            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/@[a-zA-Z_]\w*/, 'tag'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(#.*$)/, 'comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\*\//, 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};