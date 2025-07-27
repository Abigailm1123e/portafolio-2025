document.addEventListener('DOMContentLoaded', () => {
  // Paso 1: Define tus proyectos como objetos JSON
  const proyectos = [
    {
      nombre: "Dashboard del Clima",
      tecnologias: ["Python", "Bigquery","Streamlit", "Google Sheets", "Looker Studio"]
    }
    ,
    {
      nombre: "Dashboard Comercial de Tienda Online",
      tecnologias: [ "Bigquery", "Looker Studio"]
    },/*
    {
      nombre: "Sistema de Análisis Predictivo",
      tecnologias: ["Python", "Pandas", "Scikit-Learn"]
    }*/
  ];

  // Paso 2: Calcular KPIs
  const totalProyectos = proyectos.length;
  document.querySelector('#kpi-proyectos').textContent = totalProyectos;

  // Paso 3: Calcular tecnologías y sus frecuencias
  const tecnologiaConteo = {};
  proyectos.forEach(p => {
    p.tecnologias.forEach(t => {
      tecnologiaConteo[t] = (tecnologiaConteo[t] || 0) + 1;
    });
  });

  const totalTecnologias = Object.values(tecnologiaConteo).reduce((acc, val) => acc + val, 0);
  const leyenda = document.querySelector('#leyenda-tecnologias');
  leyenda.innerHTML = '';

  // Paso 4: Renderizar leyenda
  Object.entries(tecnologiaConteo).forEach(([tech, count], idx) => {
    const porcentaje = ((count / totalTecnologias) * 100).toFixed(0);
    const colores = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#06b6d4", "#f43f5e"];
    const color = colores[idx % colores.length];

    const div = document.createElement('div');
    div.className = 'flex items-center';
    div.innerHTML = `
      <div class="w-3 h-3 rounded-full mr-2" style="background:${color}"></div>
      <span class="text-sm text-gray-600">${tech} (${porcentaje}%)</span>
    `;
    leyenda.appendChild(div);
  });

  // Paso 5: Generar gráfico dinámico de tecnologías
  const ctx = document.getElementById('pieChart').getContext('2d');
  const labels = Object.keys(tecnologiaConteo);
  const data = Object.values(tecnologiaConteo);
  const colores = ["#3B82F6", "#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#06b6d4", "#f43f5e"];

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colores.slice(0, labels.length),
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false // Ya tienes la leyenda personalizada
        }
      }
    }
  });
});
