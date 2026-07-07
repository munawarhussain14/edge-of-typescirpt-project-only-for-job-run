import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Edge</h1>
        <p className="tagline">Agent-Based Business Solutions</p>
      </header>

      <main className="content">
        <section className="intro">
          <h2>Welcome to Edge</h2>
          <p>
            Edge provides an intelligent agent-based approach to assist businesses
            in optimizing their operations and making data-driven decisions.
          </p>
        </section>

        <section className="features">
          <div className="feature">
            <h3>🚀 Streamline Operations</h3>
            <p>Automate and enhance business workflows for improved efficiency</p>
          </div>

          <div className="feature">
            <h3>📊 Support Decision-Making</h3>
            <p>Provide data-driven insights and recommendations</p>
          </div>

          <div className="feature">
            <h3>⚡ Optimize Resources</h3>
            <p>Utilize operational capabilities more effectively</p>
          </div>
        </section>

        <section className="cta">
          <p>
            Empower your business through intelligent automation and operational excellence.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
