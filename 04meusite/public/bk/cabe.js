import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* Cabeçalho */}
      <header className="bg-primary text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Gerson Eustáquio dos Santos</h1>
          <p className="lead">Analista de Sistemas | Soluções em Tecnologia</p>
          <a href="#contato" className="btn btn-light btn-lg mt-3">Entre em Contato</a>
        </div>
      </header>

      {/* Seção Sobre Mim */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Sobre Mim</h2>
          <p className="text-center mx-auto" style={{ maxWidth: '600px' }}>
            Sou Gerson Eustáquio dos Santos, um analista de sistemas apaixonado por tecnologia e inovação. 
            Com experiência em desenvolvimento de software, análise de dados e resolução de problemas complexos, 
            ajudo empresas a otimizarem seus processos com soluções sob medida.
          </p>
        </div>
      </section>

      {/* Seção Serviços */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Serviços</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Desenvolvimento de Software</h5>
                  <p className="card-text">Criação de sistemas personalizados para atender às suas necessidades.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Consultoria em TI</h5>
                  <p className="card-text">Orientação estratégica para melhorar sua infraestrutura tecnológica.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body text-center">
                  <h5 className="card-title">Análise de Sistemas</h5>
                  <p className="card-text">Mapeamento e otimização de processos para maior eficiência.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Portfólio */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Portfólio</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Projeto 1</h5>
                  <p className="card-text">Sistema de gestão para pequenas empresas.</p>
                  <button className="btn btn-outline-primary">Saiba Mais</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Projeto 2</h5>
                  <p className="card-text">Aplicativo web para controle de estoque.</p>
                  <button className="btn btn-outline-primary">Saiba Mais</button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Projeto 3</h5>
                  <p className="card-text">Automação de relatórios empresariais.</p>
                  <button className="btn btn-outline-primary">Saiba Mais</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato - Com WhatsApp adicionado */}
      <section id="contato" className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="mb-4">Contato</h2>
          <p className="lead">Precisa de uma solução tecnológica? Entre em contato comigo!</p>
          <p>Email: gerson.eustaquio@example.com</p>
          <p>Telefone: (11) 98765-4321</p>
          <p>WhatsApp: <a href="https://wa.me/5511987654321" className="text-white" target="_blank" rel="noopener noreferrer">(11) 98765-4321</a></p>
          <div className="mt-3">
            <a href="mailto:gerson.eustaquio@example.com" className="btn btn-outline-light mx-2">Enviar Email</a>
            <a href="https://wa.me/5511987654321" className="btn btn-outline-light mx-2" target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 Gerson Eustáquio dos Santos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;