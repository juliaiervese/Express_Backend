// Definindo a função corretamente
const securedExampleProcess = async (req, res) => {
    console.log("Something that needs authentication was run here");
    return res.status(200).json({ message: 'This is a secured endpoint' });
}

// Exportando a função correta
export default { securedExampleProcess };

