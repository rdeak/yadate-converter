import findTokens from './findTokens';
describe('year', ()=>{
    it('Y', ()=>{
        expect(findTokens('Y')).toHaveLength(1);
    });
    it('YY', ()=>{
        expect(findTokens('YY')).toHaveLength(1);
    });
    it('YYYY', ()=>{
        expect(findTokens('YYYY')).toHaveLength(1);
    });
});
describe('month', ()=>{
    it('M', ()=>{
        expect(findTokens('M')).toHaveLength(1);
    });
    it('MM', ()=>{
        expect(findTokens('MM')).toHaveLength(1);
    });
});
describe('day', ()=>{
    it('D', ()=>{
        expect(findTokens('D')).toHaveLength(1);
    });
    it('DD', ()=>{
        expect(findTokens('DD')).toHaveLength(1);
    });
});
describe('hour', ()=>{
    it('H', ()=>{
        expect(findTokens('H')).toHaveLength(1);
    });
    it('HH', ()=>{
        expect(findTokens('HH')).toHaveLength(1);
    });
});
describe('minutes', ()=>{
    it('m', ()=>{
        expect(findTokens('m')).toHaveLength(1);
    });
    it('mm', ()=>{
        expect(findTokens('mm')).toHaveLength(1);
    });
});
describe('seconds', ()=>{
    it('s', ()=>{
        expect(findTokens('s')).toHaveLength(1);
    });
    it('ss', ()=>{
        expect(findTokens('ss')).toHaveLength(1);
    });
});
describe('miliseconds', ()=>{
    it('S', ()=>{
        expect(findTokens('S')).toHaveLength(1);
    });
    it('SS', ()=>{
        expect(findTokens('SS')).toHaveLength(1);
    });
    it('SSS', ()=>{
        expect(findTokens('SSS')).toHaveLength(1);
    });
});