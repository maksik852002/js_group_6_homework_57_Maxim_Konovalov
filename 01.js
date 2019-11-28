const tasks = [
  {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
  {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
  {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
  {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
  {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
  {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
  {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
 ];

 console.log(`Общее количество времени, затраченное на работу над задачами из категории 'Frontend': ${tasks.reduce((acc, el) => el.category==='Frontend' ? acc + el.timeSpent :acc,0)} часов.`);
 console.log(`Общее количество времени, затраченное на работу над задачами типа 'bug': ${tasks.reduce((acc, el) => el.type==='bug' ? acc + el.timeSpent : acc,0)} часов.`);
 console.log(`Количество задач, имеющих в названии слово "UI": ${tasks.reduce((acc,el) => el.title.includes('UI') ? acc+1: acc, 0)} задачи.`);
 console.log('Получите количество задач каждой категории в объект вида:');
 console.log(tasks.reduce((acc, el) => {acc[el.category]=(acc[el.category] || 0)+1; return acc}, {}));
 console.log('Массив задач с затраченным временем больше 4 часов. В массиве должны быть объекты только с ключами title и category:');
 console.log(tasks.reduce((acc,el) => el.timeSpent > 4 ? acc.concat([{title:el.title, category:el.category}]) : acc,[]));