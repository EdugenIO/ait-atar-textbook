import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const css=await readFile('style.css','utf8');
assert(!/(?:^|[{}])\s*aside\s*\{[^}]*min-height:/m.test(css),'Viewport/sidebar height must not apply to all lesson asides');
assert(css.includes('.layout > aside{padding:36px 28px'),'Desktop bookshelf retains its layout');
assert(css.includes('.layout > aside{min-height:0'),'Mobile bookshelf retains its own layout');
assert(!css.includes('header,aside,'),'Print rules must not hide every content aside');
console.log('Passed: sidebar size/mobile/print rules are scoped to the layout bookshelf, keeping lesson callouts content-sized.');
