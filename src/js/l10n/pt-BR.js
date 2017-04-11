(function ($) {
    $.extend($.validatr.messages, {
        checkbox: 'Por favor, marque este campo para prosseguir.',
        color: 'Por favor, digite uma cor no formato #xxxxxx',
        email: {
            single: 'Por favor, digite um endereço de e-mail.',
            multiple: 'Por favor, adicione a lista de e-mails separando-os por vírgulas.'
        },
        pattern: 'Por favor, insira um valor no formato correspondente.',
        radio: 'Por favor, selecione uma destas opções.',
        range: {
            base: 'Por favor, selecione um(a) {{type}}',
            overflow: 'Por favor, selecione um(a) {{type}} maior ou igual que {{min}}.', 
            overUnder: 'Por favor, selecione um(a) {{type}} maior ou igual que {{min}}<br> e menor ou igual que {{max}}.',
            invalid: '{{type}} inválido(a).',
            underflow: 'Por favor, selecione um(a) {{type}} menor ou igual que {{max}}.'
        },
        required: 'Por favor, preencha este campo.',
        select: 'Por favor, selecione um item da lista.',
        time: 'Por favor, insira um horário no formato hh:mm:ss',
        url: 'Por favor, insira uma URL.'
    });
}(jQuery));
