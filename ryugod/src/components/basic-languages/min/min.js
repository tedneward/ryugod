/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ';',
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
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
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
    tokenPostfix: '.min',
    keywords: [

    ],
    builtins: [
        'abs',
        'absolute',
        'accept',
        'acos',
        'admin',
        'aes',
        'all',
        'and',
        'any',
        'append',
        'apply',
        'args',
        'asin',
        'ask',
        'atan',
        'atime',
        'avg',
        'base',
        'bind',
        'bitand',
        'bitclear',
        'bitflip',
        'bitnot',
        'bitor',
        'bitparity',
        'bitset',
        'bitxor',
        'boolean',
        'capitalize',
        'case',
        'cd',
        'ceil',
        'chmod',
        'choose',
        'chr',
        'clear',
        'cleave',
        'close',
        'color',
        'column',
        'compiled',
        'concat',
        'confirm',
        'connect',
        'cons',
        'cos',
        'cosh',
        'cp',
        'cpu',
        'ctime',
        'd2r',
        'datetime',
        'ddel',
        'ddup',
        'debug',
        'decode',
        'define',
        'defined',
        'delete',
        'dequote',
        'dev',
        'dget',
        'dhas',
        'dictionary',
        'difference',
        'dip',
        'dir',
        'dirname',
        'div',
        'dkeys',
        'download',
        'dpairs',
        'dpick',
        'drop',
        'dsdelete',
        'dset',
        'dsget',
        'dshas',
        'dsinit',
        'dspost',
        'dsput',
        'dsquery',
        'dsread',
        'dswrite',
        'dtype',
        'dup',
        'dvalues',
        'e',
        'encode',
        'env',
        'error',
        'escape',
        'eval',
        'even',
        'exists',
        'exit',
        'expand',
        'expect',
        'fappend',
        'fatal',
        'file',
        'filename',
        'filter',
        'find',
        'first',
        'flatten',
        'float',
        'floor',
        'foreach',
        'format',
        'fperms',
        'fread',
        'from',
        'fsize',
        'fstats',
        'ftype',
        'fwrite',
        'get',
        'getchr',
        'gets',
        'getstack',
        'hardlink',
        'harvest',
        'help',
        'hidden',
        'id',
        'if',
        'import',
        'in',
        'indent',
        'indexof',
        'inf',
        'infix',
        'info',
        'insert',
        'integer',
        'interpolate',
        'intersection',
        'invoke',
        'join',
        'keep',
        'lambda',
        'lambdabind',
        'last',
        'length',
        'line',
        'linrec',
        'listen',
        'ln',
        'load',
        'log10',
        'log2',
        'loglevel',
        'lowercase',
        'ls',
        'map',
        'mapkey',
        'match',
        'md4',
        'md5',
        'med',
        'mkdir',
        'mod',
        'mtime',
        'mv',
        'nan',
        'newline',
        'nip',
        'normalized',
        'not',
        'notice',
        'now',
        'null',
        'number',
        'odd',
        'one',
        'operator',
        'opts',
        'or',
        'ord',
        'os',
        'over',
        'parent',
        'parse',
        'partition',
        'password',
        'pi',
        'pick',
        'pop',
        'pow',
        'pred',
        'prefix',
        'prepend',
        'print',
        'product',
        'prompt',
        'publish',
        'put',
        'putchr',
        'puts',
        'pwd',
        'quit',
        'quotation',
        'quote',
        'quotecmd',
        'quoted',
        'quotesym',
        'r2g',
        'raise',
        'random',
        'randomize',
        'range',
        'raw',
        'read',
        'recv',
        'reduce',
        'reject',
        'relative',
        'remove',
        'repeat',
        'replace',
        'request',
        'require',
        'rest',
        'return',
        'reverse',
        'rm',
        'rmdir',
        'rolldown',
        'rollup',
        'round',
        'run',
        'save',
        'saved',
        'scope',
        'seal',
        'sealed',
        'search',
        'semver',
        'send',
        'set',
        'setstack',
        'sha1',
        'sha224',
        'sha256',
        'sha384',
        'sha512',
        'shl',
        'shorten',
        'shr',
        'sigil',
        'sigils',
        'sin',
        'sinh',
        'sip',
        'size',
        'sleep',
        'slice',
        'socket',
        'sort',
        'source',
        'split',
        'spread',
        'sqrt',
        'start',
        'stop',
        'string',
        'stringlike',
        'strip',
        'substr',
        'succ',
        'suffix',
        'sum',
        'swap',
        'swons',
        'symbol',
        'symbols',
        'symlink',
        'symmetric',
        'system',
        'take',
        'tan',
        'tanh',
        'tap',
        'tau',
        'tformat',
        'timeinfo',
        'times',
        'timestamp',
        'titleize',
        'to',
        'tokenize',
        'trunc',
        'try',
        'type',
        'typealias',
        'union',
        'unix',
        'unless',
        'unmapkey',
        'unseal',
        'unzip',
        'uppercase',
        'version',
        'warn',
        'when',
        'which',
        'while',
        'windows',
        'with',
        'write',
        'xcdata',
        'xcomment',
        'xelement',
        'xentity',
        'xentity2utf8',
        'xescape',
        'xor',
        'xquery',
        'xqueryall',
        'xtext',
        'zip',
    ],
    typeKeywords: [
        'null',
        'boolean',
        'integer',
        'float',
        'string',
        'quotation',
        'command',
        'dictionary',
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
            [/[,]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],
            [/:[a-zA-Z_][\w-]*/, 'type.identifier'],
            [/['@][a-zA-Z_][\w-]*/, 'metatag'],
            [
                /[a-zA-Z_][\w\-]*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'keyword',
                        '@typeKeywords': 'keyword.flow',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(;.*$)/, 'comment'],
        ],
        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],
        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
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
