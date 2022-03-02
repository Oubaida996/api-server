
const logger = require("../src/middleware/logger");

describe('test console and next function inside logger ', () => {

    let consoleSpy;
    let req = {};
    let res = {};
    let next = jest.fn();


    beforeEach(() => {
        consoleSpy = jest.spyOn(console, "log").mockImplementation();
    });

    it('test log', () => {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    }

    );

    it('test next function' ,()=>{
            logger(req,res,next);
            expect(next).toHaveBeenCalled();
    });

    afterAll(()=>{
        consoleSpy.mockRestore();
    })







});




