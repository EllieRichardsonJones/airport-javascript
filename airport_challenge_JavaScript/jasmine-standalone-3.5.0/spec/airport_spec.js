describe('Airport', function () {
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });

  describe('knows when a', function() {
    it('plane lands', function(){
      expect(airport.land(plane)).toEqual(plane);
    });

  });

});
