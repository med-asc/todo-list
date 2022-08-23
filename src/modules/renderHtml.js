import createHtml from './htmlGen';
// || Head
// Navigation (Project)
function renderNav(element, projectList) {
  const parent = element;
  parent.innerHTML = '';
  const ul = createHtml({
    type: 'ul',
    class: 'project',
  });

  projectList.forEach((row) => {
    const li = createHtml({
      type: 'li',
      attr: [['data-id', row.id]],
      class: 'nav-item',
    });
    const a = createHtml({
      type: 'a',
      attr: [['href', '#']],
      text: row.title,
    });
    li.appendChild(a);
    ul.appendChild(li);
  });

  const nav = createHtml({ type: 'nav' });
  const btn = createHtml({
    type: 'button',
    class: 'btn btn-project',
    text: 'Add project',
  });

  nav.appendChild(ul);
  parent.appendChild(nav);
  parent.appendChild(btn);
}

// || Body
// Project form
function renderProjectForm(element, obj) {
  const parent = element;
  parent.innerHTML = '';

  const formText = {};
  if (obj) {
    formText.h2 = `Edit ${obj.title}`;
    formText.label = 'Title';
    formText.input = obj.title;
    formText.btn = 'Update';
  } else {
    formText.h2 = 'Add new Project';
    formText.label = 'Title';
    formText.input = '';
    formText.btn = 'Add';
  }

  // Create div header
  const divHead = createHtml({
    type: 'div',
    class: 'pageHeader-heading',
  });
  const h2Head = createHtml({
    type: 'h2',
    text: formText.h2,
  });
  divHead.appendChild(h2Head);
  parent.appendChild(divHead);

  // Form
  const form = createHtml({
    type: 'form',
    attr: [['action', '']],
  });
  const formDiv = createHtml({ type: 'div' });
  const label = createHtml({
    type: 'label',
    attr: [['for', 'projectTitle']],
    text: formText.label,
  });
  const input = createHtml({
    type: 'input',
    attr: [
      ['type', 'text'],
      ['name', 'projectTitle'],
      ['id', 'projectTitle'],
      ['value', formText.input],
    ],
  });
  const btn = createHtml({
    type: 'button',
    text: formText.btn,
    class: 'btn',
    attr: [['id', 'submitProject']],
  });

  formDiv.appendChild(label);
  formDiv.appendChild(input);
  form.appendChild(formDiv);
  form.appendChild(btn);
  parent.appendChild(form);
}

// Todo form
function renderTodoForm(element, obj) {
  const parent = element;
  parent.innerHTML = '';

  const formText = {};
  if (obj) {
    formText.h2 = `Edit ${obj.title}`;
    formText.label = 'Title';
    formText.input = obj.title;
    formText.label2 = 'Description';
    formText.desc = obj.description;
    formText.label3 = 'Due date';
    formText.date = obj.date;
    formText.label4 = 'Priority';
    formText.prio = obj.priority;
    formText.btn = 'Update';
  } else {
    formText.h2 = 'Create new Todo';
    formText.label = 'Title';
    formText.input = '';
    formText.label2 = 'Description';
    formText.desc = '';
    formText.label3 = 'Due date';
    formText.date = '';
    formText.label4 = 'Priority';
    formText.prio = '';
    formText.btn = 'Add';
  }

  parent.innerHTML = '';
  // Create div header
  const divHead = createHtml({
    type: 'div',
    class: 'pageHeader-heading',
  });
  const h2Head = createHtml({
    type: 'h2',
    text: formText.h2,
  });
  divHead.appendChild(h2Head);
  parent.appendChild(divHead);

  // form
  const form = createHtml({
    type: 'form',
    attr: [['action', '']],
  });

  const formDiv = createHtml({ type: 'div' });
  const label = createHtml({
    type: 'label',
    attr: [['for', 'todoTitle']],
    text: formText.label,
  });
  const input = createHtml({
    type: 'input',
    attr: [
      ['type', 'text'],
      ['name', 'todoTitle'],
      ['id', 'todoTitle'],
      ['value', formText.input],
    ],
  });

  formDiv.appendChild(label);
  formDiv.appendChild(input);
  form.appendChild(formDiv);

  const formDiv2 = createHtml({ type: 'div' });
  const label2 = createHtml({
    type: 'label',
    attr: [['for', 'todoDesc']],
    text: formText.label2,
  });
  const input2 = createHtml({
    type: 'textarea',
    text: formText.desc,
    attr: [
      ['name', 'desc'],
      ['id', 'todoDesc'],
      ['cols', '92'],
      ['rows', '10'],
    ],
  });

  formDiv2.appendChild(label2);
  formDiv2.appendChild(input2);
  form.appendChild(formDiv2);

  const formDiv3 = createHtml({ type: 'div' });
  const label3 = createHtml({
    type: 'label',
    attr: [['for', 'todoDate']],
    text: formText.label3,
  });
  const input3 = createHtml({
    type: 'input',
    attr: [
      ['type', 'date'],
      ['name', 'todoDate'],
      ['id', 'todoDate'],
      ['value', formText.date],
    ],
  });

  formDiv3.appendChild(label3);
  formDiv3.appendChild(input3);
  form.appendChild(formDiv3);

  const formDiv4 = createHtml({ type: 'div' });
  const label4 = createHtml({
    type: 'label',
    attr: [['for', 'todoPriority']],
    text: formText.label4,
  });
  formDiv4.appendChild(label4);

  const formDivCheck1 = createHtml({
    type: 'div',
    class: 'checkbox-item',
  });
  const inputLow = createHtml({
    type: 'input',
    attr: [
      ['type', 'radio'],
      ['id', 'lowPrio'],
      ['name', 'priority'],
      ['value', 'low'],
    ],
  });
  const labelLow = createHtml({
    type: 'label',
    attr: [['for', 'lowPrio']],
    text: 'Low priority',
  });
  if (obj.priority === 'low') inputLow.setAttribute('checked', 'checked');

  formDivCheck1.appendChild(inputLow);
  formDivCheck1.appendChild(labelLow);
  formDiv4.appendChild(formDivCheck1);

  const formDivCheck2 = createHtml({
    type: 'div',
    class: 'checkbox-item',
  });
  const inputMed = createHtml({
    type: 'input',
    attr: [
      ['type', 'radio'],
      ['id', 'medPrio'],
      ['name', 'priority'],
      ['value', 'medium'],
    ],
  });
  const labelMed = createHtml({
    type: 'label',
    attr: [['for', 'medPrio']],
    text: 'Medium priority',
  });
  if (obj.priority === 'medium') inputMed.setAttribute('checked', 'checked');

  formDivCheck2.appendChild(inputMed);
  formDivCheck2.appendChild(labelMed);
  formDiv4.appendChild(formDivCheck2);

  const formDivCheck3 = createHtml({
    type: 'div',
    class: 'checkbox-item',
  });
  const inputHigh = createHtml({
    type: 'input',
    attr: [
      ['type', 'radio'],
      ['id', 'highPrio'],
      ['name', 'priority'],
      ['value', 'high'],
    ],
  });
  const labelHigh = createHtml({
    type: 'label',
    attr: [['for', 'highPrio']],
    text: 'High priority',
  });
  if (obj.priority === 'high') inputHigh.setAttribute('checked', 'checked');

  formDivCheck3.appendChild(inputHigh);
  formDivCheck3.appendChild(labelHigh);
  formDiv4.appendChild(formDivCheck3);

  form.appendChild(formDiv4);

  const subBtn = createHtml({
    type: 'button',
    text: formText.btn,
    class: 'btn',
    attr: [['id', 'submitTodo']],
  });
  form.appendChild(subBtn);
  if (obj) {
    const delBtn = createHtml({
      type: 'button',
      text: 'Delete',
      class: 'btn btn-red',
      attr: [['id', 'deleteTodo']],
    });
    form.appendChild(delBtn);
  }
  parent.appendChild(form);
}

// Project / Todo page
function renderProjectPage(element, obj) {
  const parent = element;
  parent.innerHTML = '';

  // Create div header
  const divHead = createHtml({
    type: 'div',
    class: 'pageHeader-heading',
  });
  const h2Head = createHtml({
    type: 'h2',
    text: obj.title,
  });
  const projectEdit = createHtml({
    type: 'button',
    class: 'btn',
    text: 'Edit project',
    attr: [['id', 'editProject']],
  });

  divHead.appendChild(h2Head);
  divHead.appendChild(projectEdit);
  parent.appendChild(divHead);

  const btnAdd = createHtml({
    type: 'button',
    class: 'btn',
    text: 'Add Todo',
    attr: [['id', 'addTodo']],
  });
  parent.appendChild(btnAdd);

  const divBody = createHtml({
    type: 'div',
    class: 'page-body',
  });

  const sortedTodo = obj.list.sort((last) => (last.done === true ? 1 : -1));

  sortedTodo.forEach((item) => {
    let divTodo = createHtml({
      type: 'div',
      class: 'row-item',
      attr: [['data-id', item.id]],
    });

    if (item.done) {
      divTodo = createHtml({
        type: 'div',
        class: 'row-item row-done',
        attr: [['data-id', item.id]],
      });
    }

    const itemHead = createHtml({
      type: 'div',
      class: 'row-heading',
    });
    const divTitle = createHtml({
      type: 'div',
      class: 'row-title',
    });

    let check = createHtml({
      type: 'input',
      attr: [
        ['type', 'checkbox'],
        ['id', item.id],
      ],
      class: 'lg-check',
    });

    if (item.done) {
      check = createHtml({
        type: 'input',
        attr: [
          ['type', 'checkbox'],
          ['id', item.id],
          ['checked', 'checked'],
        ],
        class: 'lg-check',
      });
    }

    const title = createHtml({
      type: 'p',
      text: item.title,
    });
    const priority = createHtml({
      type: 'span',
      text: item.priority,
      class: `priority priority-${item.priority}`,
    });
    const dueDate = createHtml({
      type: 'span',
      text: item.date,
      class: 'due-date',
    });

    divTitle.appendChild(check);
    divTitle.appendChild(title);
    divTitle.appendChild(priority);

    itemHead.appendChild(divTitle);
    itemHead.appendChild(dueDate);
    divTodo.appendChild(itemHead);
    divBody.appendChild(divTodo);
  });

  parent.appendChild(divBody);
}

// Todo description
function renderTodoDetails(element, obj) {
  const parent = element;

  const div = createHtml({
    type: 'div',
    class: 'row-details',
  });
  const desc = createHtml({
    type: 'p',
    text: obj.description,
  });
  const btn = createHtml({
    type: 'button',
    text: 'Edit Todo',
    class: 'btn btn-todo',
  });
  div.appendChild(desc);
  div.appendChild(btn);
  parent.appendChild(div);
}

export default renderNav;
export {
  renderProjectForm,
  renderTodoForm,
  renderProjectPage,
  renderTodoDetails,
};
