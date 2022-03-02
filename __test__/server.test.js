
const supertest =require('supertest');
const server =require('../src/server');
const request =supertest(server.app);



describe('server test' ,()=>{



it('test 404 on a bad route' ,async()=>{

    const response = await request.get('/food');
    expect(response.status).toEqual(404);

});


it('test 404 on a bad method ',async()=>{

    const response = await request.post('/foods');
    expect(response.req.method).toEqual("POST");

});

it('test create a record using POST ',async()=>{

    const response = await request.post('/foods').send({
        foodName : "Mansaf",
        categoryName:"rice"
    });
    expect(response.status).toEqual(200);

});


it('test Read a list of records using GET ',async()=>{

    const response = await request.get('/foods');
    expect(response.status).toEqual(200);

});

it('test Read a record using GET ',async()=>{

    const response = await request.get('/foods/1');
    expect(response.status).toEqual(200);

});

it('testUpdate a record using PUT ',async()=>{

    const response = await request.put('/foods/1').send({
        foodName : "Mansaf",
        categoryName:"rice"
    });
    expect(response.status).toEqual(200);

});


it('test Destroy a record using DELETE',async()=>{

    const response = await request.delete('/foods/1');
    expect(response.status).toEqual(200);

});



} );



