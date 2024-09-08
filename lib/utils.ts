
// Adiciona o método ao protótipo de Number
export const toReal = (e:number): string => {
  return e.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};


export const formatDateString = (dateString: string): string => {
  // Cria um objeto Date a partir da string de data
  const date = new Date(dateString);

  // Formata dia, mês e ano
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês começa em 0
  const year = date.getFullYear();

  // Formata hora, minuto e segundo
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  // Retorna a string formatada
  return `${day}/${month}/${year} ${hours}:${minutes}`;
};




export const convertTimestampToDate = (timestamp: { seconds: number; nanoseconds: number }): string => {
  // Criar um objeto Date a partir do valor em segundos
  const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

  // Formatar a data no formato "dia/mês/ano hora:minuto"
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Os meses são indexados a partir de 0
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};