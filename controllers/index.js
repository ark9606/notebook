const obj = {};



obj.getPage = (req, res) => {
  const data = {
    title: 'Notebook'
  };

  res.render('index', data);
};

module.exports = obj;