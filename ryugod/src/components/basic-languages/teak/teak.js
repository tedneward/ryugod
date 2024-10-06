/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
export var conf = {
    comments: {
        lineComment: '//',
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
    tokenPostfix: '.teak',
    keywords: [
        'anytype',
        'assert',
        'await',
        'break',
        'continue',
        'else',
        'err',
        'for',
        'functype',
        'handletype',
        'if',
        'in',
        'inttype',
        'new',
        'reterr',
        'return',        
        'struct',
        'while',
    ],
    builtins: [
        '_DirectoryInternalEndIteration',
        '_DirectoryInternalNextIteration',
        '_DirectoryInternalStartIteration',
        '_SystemShellEvaluateInternal',
        'ConsoleGetLine',
        'ConsoleWriteStderr',
        'ConsoleWriteStdout',
        'FileAppend',
        'FileCopy',
        'FileGetLastModificationTimeStamp',
        'FileGetSize',
        'FileReadAll',
        'FileWriteAll',
        'Log',
        'LogClose',
        'LogOpenGroup',
        'PathCreateDirectory',
        'PathDelete',
        'PathExists',
        'PathGetDefaultPrefix',
        'PathIsDirectory',
        'PathIsFile',
        'PathIsLink',
        'PathMove',
        'PathSetDefaultPrefixToScriptSourceDirectory',
        'PathToAbsolute',
        'PersistRead',
        'PersistWrite',
        'RandomInt',
        'SystemExit',
        'SystemGetEnvironmentVariable',
        'SystemGetHostName',
        'SystemGetProcessorCount',
        'SystemRunningAsAdministrator',
        'SystemSetEnvironmentVariable',
        'SystemShellEnableLogging',
        'SystemShellExecute',
        'SystemShellExecuteWithWorkingDirectory',
        'SystemSleepMs',
        'TextColorError',
        'TextColorHighlight',
        'TextMonospaced',
        'TextPlain',
        'TextWeight',
    ],
    typeKeywords: [
        'str',
        'tuple',
        'bool',
        'false',
        'float',
        'int',
        'true',
        'null',
        'void',
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
            [/(\/\/.*$)/, 'comment'],
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
