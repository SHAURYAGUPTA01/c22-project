class rope{
	constructor(body1,body2,pointA,pointB)
	{
      this.pointA = this.pointA
	  this.pointB = this.pointB
	//create rope constraint here
	 var options = {
		bodyA : body1,
		bodyB : body2,
		pointB : {x : this.pointA,y : this.pointB}
	 }
     
	}


    //create display() here 
    display(){
		var pointA = this.rope.bodyA.position
		var pointB = this.rope.bodyB.position

		strokeWeight(2)
		line(pointA.x,pointA.y,pointB.x,pointB.y)
	}
}
