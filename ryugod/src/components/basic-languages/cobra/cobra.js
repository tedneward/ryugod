/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { languages } from '../fillers/monaco-editor-core.js';
export var conf = {
    comments: {
        lineComment: '#',
        blockComment: ["/#", "#/"]
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
    onEnterRules: [
        {
            beforeText: new RegExp('^\\s*(?:class|if|for|if|else|while|interface).*?\\s*$'),
            action: { indentAction: languages.IndentAction.Indent }
        }
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
    defaultToken: '',
    tokenPostfix: '.',
    keywords: [
        'abstract',
        'adds',
        'all',
        'and',
        'any',
        'as',
        'assert',
        'base',
        'be',
        'body',
        'bool',
        'branch',
        'break',
        'callable',
        'catch',
        'char',
        'class',
        'const',
        'continue',
        'cue',
        'decimal',
        'def',
        'do',
        'dynamic',
        'each',
        'else',
        'end',
        'ensure',
        'enum',
        'event',
        'every',
        'except',
        'expect',
        'extend',
        'extern',
        'fake',
        'false',
        'finally',
        'float',
        'for',
        'from',
        'get',
        'has',
        'if',
        'ignore',
        'implements',
        'implies',
        'import',
        'in',
        'inherits',
        'inlined',
        'inout',
        'int',
        'interface',
        'internal',
        'invariant',
        'is',
        'listen',
        'lock',
        'mixin',
        'must',
        'namespace',
        'new',
        'nil',
        'nonvirtual',
        'not',
        'number',
        'objc',
        'of',
        'off',
        'old',
        'on',
        'or',
        'out',
        'override',
        'par',
        'partial',
        'pass',
        'passthrough',
        'post',
        'print',
        'private',
        'pro',
        'protected',
        'public',
        'raise',
        'ref',
        'require',
        'return',
        'same',
        'set',
        'shared',
        'sig',
        'stop',
        'struct',
        'success',
        'test',
        'this',
        'throw',
        'to',
        'to?',
        'trace',
        'true',
        'try',
        'uint',
        'use',
        'using',
        'var',
        'vari',
        'virtual',
        'where',
        'while',
        'yield',
    ],
    builtins: [
        'Action',
        'Array',
        'Boolean',
        'Buffer',
        'Chars',
        'Clone',
        'Compare',
        'CompareOrdinal',
        'CompareTo',
        'Concat',
        'Console',
        'Contains',
        'Create',
        'EndsWith',
        'EnumerateRunes',
        'Equals',
        'Finalize',
        'Format',
        'Func',
        'GetEnumerator',
        'GetHashCode',
        'GetHashCode',
        'GetPinnableReference',
        'GetType',
        'GetTypeCode',
        'Index',
        'IndexOf',
        'IndexOfAny',
        'Insert',
        'Intern',
        'IsInterned',
        'IsNormalized',
        'IsNullOrEmpty',
        'IsNullOrWhiteSpace',
        'Join',
        'LastIndexOf',
        'LastIndexOfAny',
        'Length',
        'Math',
        'MemberwiseClone',
        'MemberwiseClone',
        'Normalize',
        'PadLeft',
        'PadRight',
        'Random',
        'Range',
        'ReferenceEquals',
        'Remove',
        'Replace',
        'SByte',
        'String',
        'Split',
        'System',
        'StartsWith',
        'Substring',
        'ToCharArray',
        'ToLower',
        'ToString',
        'ToUpper',
        'Trim',
        'TrimEnd',
        'TrimStart',
        'Tuple',
        'UInt16',
        'Uint32',
        'UInt64',
        'UIntPtr',
        'Uri',
        'Void',
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
            [/@[a-zA-Z_]\w*/, 'metatag'],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@builtins': 'type.identifier',
                        '@default': 'identifier'
                    }
                }
            ]
        ],
        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(#.*$)/, 'comment'],
            [/\/#/, 'comment', '@comment'],
        ],
        comment: [
            [/[^\/#]+/, 'comment'],
            [/#\//, 'comment', '@pop'],
            [/[\#]/, 'comment']
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