/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: ['//'],
        blockComment: ["/*", "*/"]
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
        //{ open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        //{ open: "'", close: "'" }
    ],
};
export var language = {
    defaultToken: '',
    tokenPostfix: '.as3',
    keywords: [
        'if',
        'else',
        'and',
        'or',
        'not',
        'do',
        'while',
        'for',
        'in',
        'break',
        'continue',
        'switch',
        'case',
        'default',
        'new',
        'arguments',
        'Array',
        'Boolean',
        'Date',
        '_global',
        'Math',
        'Number',
        'Object',
        'String',
        'super',
        'var',
        'this',
        'Accessibility',
        'Color',
        'Key',
        '_level',
        'Mouse',
        '_root',
        'Selection',
        'Sound',
        'Stage',
        'System',
        'TextFormat',
        'LoadVars',
        'XML',
        'XMLSocket',
        'XMLNode',
        'LoadVars',
        'Button',
        'TextField',
        'TextSnapshot',
        'CustomActions',
        'Error',
        'ContextMenu',
        'ContextMenuItem',
        'NetConnection',
        'NetStream',
        'Video',
        'PrintJob',
        'MovieClipLoader',
        'StyleSheet',
        'Camera',
        'LocalConnection',
        'Microphone',
        'SharedObject',
        'MovieClip',
        'return',
        'with',
        'function',
        'on',
        'onClipEvent',
        'true',
        'false',
        'undefined',
        'null',
        'NaN',
        'void',
    ],
    builtins: [
        'trace',
        'concat',
        'join',
        'length',
        'pop',
        'push',
        'reverse',
        'shift',
        'slice',
        'sort',
        'sortOn',
        'splice',
        'toString',
        'unshift',
        'UTC',
        'Infinity',
        'MAX_VALUE',
        'MIN_VALUE',
        'NaN',
        'NEGATIVE_INFINITY',
        'POSITIVE_INFINITY',
        'BACKSPACE',
        'CAPSLOCK',
        'CONTROL',
        'DELETEKEY',
        'DOWN',
        'END',
        'ENTER',
        'ESCAPE',
        'getAscii',
        'getCode',
        'HOME',
        'INSERT',
        'LEFT',
        'PGDN',
        'PGUP',
        'RIGHT',
        'SHIFT',
        'SPACE',
        'TAB',
        'UP',
        'ALT',
        'hide',
        'try',
        'catch',
        'finally',
        'throw',
        'name',
        'message',
        'attributes',
        'COMM',
        'TALB',
        'TBPM',
        'TCOM',
        'TCON',
        'TCOP',
        'TDAT',
        'TDLY',
        'TENC',
        'TEXT',
        'TFLT',
        'TIME',
        'TIT1',
        'TIT2',
        'TIT3',
        'TKEY',
        'TLAN',
        'TLEN',
        'TMED',
        'TOAL',
        'TOFN',
        'TOLY',
        'TOPE',
        'TORY',
        'TOWN',
        'TPE1',
        'TPE2',
        'TPE3',
        'TPE4',
        'TPOS',
        'TPUB',
        'TRCK',
        'TRDA',
        'TRSN',
        'TRSO',
        'TSIZ',
        'TSRX',
        'TSSE',
        'TYER',
        'WXXX',
        'class',
        'extends',
        'public',
        'private',
        'static',
        'interface',
        'implements',
        'import',
        'dynamic',
        'evaluate',
        'package',
        'const',
        'include',
        'use',
        'protected',
        'native',
        'internal',
        'override',
        'final',
        'parse',
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
            [/^`\w+/, 'type.identifier'],
            [
                /@?[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@builtins': 'type.identifier',
                        '@keywords': 'keyword',
                        '@default': 'identifier',
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^\/\/.*$)/, 'comment'],
            //[/(^#.*$)/, 'comment'],
            [/\/\*/, 'comment', '@comment'],
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