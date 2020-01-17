/**/

const PORT = process.env.PORT || 8000;

const express = require( 'express' );

const app = express();

app.use( '/path/:tii' , ( req, res, next ) =>{
	console.log( req.params );
	res.send( "MOIkka" );
} );
app.use( '/path' , ( req, res, next ) =>{
	console.log( "OKKI" );
	res.write( "JOU" );
	next();
}, ( req, res, next ) => {
	res.write( "MOI" );
	// res.send( "MOI" );
	res.end();
} );


app.use( ( req, res, next ) => {
	console.log( "PATH "+req.path );
	next();
}); 

app.get( '/', ( req, res, next ) => {
	res.send( "Hello world again" );
} );

app.use( ( req, res, next ) => {
	res.status( 404 );
	res.json( { status: 404, message: 'Not found' } );
} )

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});