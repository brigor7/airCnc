const User = require('../models/User');
/**Na criação de um controller, utilizar os metodos abaixo
 * index:Criando um metodo que retorna uma listagem
 * show: Lista uma unica entidade
 * store: Criar uma entidade
 * update: Alterar uma entidade
 * destroy: Excluir uma entidade
 */
module.exports = {
  async store(req, res) {
    const { email } = req.body;
    //Realiza a busca do registro pelo email.
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }
    return res.status(201).json({ message: user });
  },

  async destroy(req, res) {
    const user_id = req.params.id;
    const user = await User.deleteOne({ _id: user_id });
    return res.status(202).json({ message: user });
  },

  async show(req, res) {
    const users = await User.find();
    return res.status(200).json({ message: users });
  },
};
