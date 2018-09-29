import format from './format';
describe('date', ()=>{
    it('ok', ()=>{
        const date = new Date(Date.UTC(2018,8,7,8,59,15));
        expect(format(date)).toEqual('07.09.2018');
        expect(format(date, 'YYYY/MM/DD')).toEqual('2018/09/07');
        expect(format(date, 'YYYY-M-D')).toEqual('2018-9-7');
        expect(format(date, 'M-DD/YY')).toEqual('9-07/18');
    });
    it('not ok', ()=>{
        expect(()=>format('07-09-18', 'DD-MM-YY')).toThrow(Error);
        expect(format(new Date(), 'XXX')).toBe(null);
    });
});