import parse from './parse';
it('mandatory arguments', ()=>{
    expect(()=>parse('9.2.2018', [])).toThrow(Error);
    expect(()=>parse('9.2.2018', 5)).toThrow(Error);
    expect(parse(2018)).toBe(null);
});
describe('date', ()=>{
    it('ok', ()=>{
        expect(parse('14.05.2018', 'DD.MM.YYYY')).toBeInstanceOf(Date);
        expect(parse('14.05.2018', 'DD.MM.YYYY')).toEqual(new Date('2018-05-14'));
        expect(parse('14.05.2018', 'DD.M.YYYY')).toBeInstanceOf(Date);
        expect(parse('14.05.2018', 'DD.M.YYYY')).toEqual(new Date('2018-05-14'));
        expect(parse('14.05.2018', 'D.MM.YYYY')).toBeInstanceOf(Date);
        expect(parse('14.05.2018', 'D.MM.YYYY')).toEqual(new Date('2018-05-14'));
        expect(parse('14.05.2018', 'D.M.YYYY')).toBeInstanceOf(Date);
        expect(parse('14.05.2018', 'D.M.YYYY')).toEqual(new Date('2018-05-14'));
        expect(parse('14.05.18', 'DD.MM.YY')).toBeInstanceOf(Date);
        expect(parse('14.05.18', 'DD.MM.YY')).toEqual(new Date('1918-05-14'));
        expect(parse('14.05.18', 'DD.M.YY')).toBeInstanceOf(Date);
        expect(parse('14.05.18', 'DD.M.YY')).toEqual(new Date('1918-05-14'));
        expect(parse('14.05.18', 'D.MM.YY')).toBeInstanceOf(Date);
        expect(parse('14.05.18', 'D.MM.YY')).toEqual(new Date('1918-05-14'));
        expect(parse('14.05.18', 'D.M.YY')).toBeInstanceOf(Date);
        expect(parse('14.05.18', 'D.M.YY')).toEqual(new Date('1918-05-14'));
    });
    it('not ok', ()=>{
        expect(parse('14.05.18x', 'D.M.YY')).toBe(null);
        expect(parse('14.AB.18', 'D.M.YY')).toBe(null);
        expect(parse('1x.05.18', 'D.M.YY')).toBe(null);
        expect(parse('10.05.18', 'XX:yy:ZZZZ')).toBe(null);
    });
});
describe('date and time', ()=>{
    it('ok', ()=>{
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY HH:mm:ss')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY HH:mm:ss')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY H:mm:ss')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY H:mm:ss')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY HH:m:ss')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY HH:m:ss')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY HH:mm:s')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY HH:mm:s')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY H:m:s')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'DD.MM.YYYY H:m:s')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
        expect(parse('14.05.2018 12:05:15', 'DD.M.YYYY H:m:s')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'DD.M.YYYY H:m:s')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
        expect(parse('14.05.2018 12:05:15', 'D.MM.YYYY H:m:s')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'D.MM.YYYY H:m:s')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
        expect(parse('14.05.2018 12:05:15', 'D.M.YYYY H:m:s')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'D.M.YYYY H:m:s')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
        expect(parse('14.05.2018 12:05:15', 'D.M.Y H:m:s')).toBeInstanceOf(Date);
        expect(parse('14.05.2018 12:05:15', 'D.M.Y H:m:s')).toEqual(new Date(Date.UTC(2018,4,14,12,5,15)));
    });
    it('not ok', ()=>{
        expect(parse('14.05.18x', 'D.M.YY HH:mm:ss')).toBe(null);
        expect(parse('14.AB.18', 'D.M.YY HH:mm:ss')).toBe(null);
        expect(parse('1x.05.18', 'D.M.YY HH:mm:ss')).toBe(null);
        expect(parse('1x.05.18', 'D.M.YY HH:mm:XX')).toBe(null);
    });
});