const productGetController = async (req, res) => {
  try {
    const products = await Product.find();
    const serializedData = products.map(product => ({
      id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
    }));
    res.status(200).json({ data: serializedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = productGetController;