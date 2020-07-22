const Metalsmith = require("metalsmith");
var render = require("consolidate").handlebars.render;
console.log(render);

const metalSimith = Metalsmith(__dirname)
  .metadata({
    name: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/",
  })
  .source("./src/")
  .use(template)
  .destination("./dist")
  .clean(false)
  .build(function (err, files) {
    if (err) {
      throw err;
    }
  });

function template(files, metalsmith, done) {
  var keys = Object.keys(files);
  const metadata = metalsmith.metadata();

  keys.map((file) => {
    const str = files[file].contents.toString();
    render(str, metadata, function (err, res) {
      if (err) return done(err);
      files[file].contents = Buffer.from(res);
      done();
    });
  });
}
