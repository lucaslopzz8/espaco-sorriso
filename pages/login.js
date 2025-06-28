
import { useState } from 'react';
import { supabase } from '../utils/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      setErro('Email ou senha incorretos');
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login - Espaço Sorriso</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} /><br/>
        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} /><br/>
        <button type="submit">Entrar</button>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
      </form>
    </div>
  );
}
