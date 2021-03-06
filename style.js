(function (blink) {
	'use strict';

	var lookwide_demoStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	lookwide_demoStyle.prototype = {
		//BK-15873 añadimos el estilo basic como parent para la herencia de los estilos del CKEditor
		parent: blink.theme.styles.basic.prototype,
		bodyClassName: 'content_type_clase_lookwide_demo',
		ckEditorStyles: {
			name: 'lookwide_demo',
			styles: [

				{ name: 'Título principal', element: 'h4', attributes: { 'class': 'bck-title1'} },
				{ name: 'Título Explore', element: 'h4', attributes: { 'class': 'bck-title2'} },


				{ name: 'Fondo Marrón', element: 'span', attributes: { 'class': 'bck-fondo1' }},

				{ name: 'Énfasis Naranja', element: 'span', attributes: { 'class': 'énfasis' }},

				{ name: 'Lista ordenada1', element: 'ol', attributes: { 'class': 'bck-ol1' } },
				{ name: 'Lista ordenada2', element: 'ol', attributes: { 'class': 'bck-ol2' } },
				{ name: 'Lista ordenada3', element: 'ol', attributes: { 'class': 'bck-ol3' } },
				{ name: 'Lista ordenada4', element: 'ol', attributes: { 'class': 'bck-ol4' } },

				{ name: 'Lista desordenada', element: 'ul', attributes: { 'class': 'bck-ul1' } },
				{ name: 'Lista desordenada2', element: 'ul', attributes: { 'class': 'bck-ul2' } },

				{ name: 'Tabla sin bordes', element: 'table', attributes: { 'class': 'bck-table bck-table-borderless' } },
				{ name: 'Tabla normal', element: 'table', attributes: { 'class': 'bck-table bck-table-normal' } },
				{ name: 'Tabla colores', element: 'table', attributes: { 'class': 'bck-table bck-table-colores' } },
				{ name: 'Celda naranja', element: 'td', attributes: { 'class': 'bck-td1' } },
				{ name: 'Celda azul', element: 'td', attributes: { 'class': 'bck-td2' } },

				{ name: 'Caja1', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-1' } },
				{ name: 'Caja2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-2' } },
				{ name: 'Caja3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-3' } },
				{ name: 'Caja4', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-4' } },
				{ name: 'Caja5', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-5' } },
				{ name: 'Caja6', type: 'widget', widget: 'blink_box', attributes: { 'class': 'box-6' } },


			]
		},

		init: function () {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.init.call(this);
			this.addActivityTitle();
			if(window.esWeb) return;
			this.removeFinalSlide();
			this.addSlideNavigators();
			this.handleScrollEnd();
			window.editar && this.configEditor();

			if ($('.navbar-bottom').length > 0) {
 				$('.navbar-bottom ol').wrapAll('<div id="bottom-navigator"></div>');
		 		var width = 0;
		 		$('.navbar-bottom li').each(function(i, elem){ width += $(elem).outerWidth(true); });
		 		$('.navbar-bottom ol').css('width', width * 1.1);
		 		var scroll = new IScroll('#bottom-navigator', {
		 			scrollX: true,
		 			scrollY: false,
		 			eventPassthrough: true
		 		});
		 		scroll.on('scrollEnd', this.handleScrollEnd);
		 		this.handleScrollEnd.call(scroll);
	 		}

		},

		removeFinalSlide: function () {
			//BK-15873 Utilizamos this.parent declarada al inicio de la clase
			this.parent.removeFinalSlide.call(this, true);
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},


		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				var initials =  blink.activity.name.match(/\b(\w)/g);

				initials = initials.slice(0, 2);
				return $(this).html().trim() + ' - ' + initials.join('') + ' > ' + blink.courseInfo.unit;
			});
		},

		handleScrollEnd: function () {
 			$('#bottom-navigator')
 				.removeClass('show_left')
 				.removeClass('show_right');

 			if (this.x < 0) {
 				$('#bottom-navigator').addClass('show_left');
 			}
 			if (this.x > this.maxScrollX) {
 				$('#bottom-navigator').addClass('show_right');
 			}

 		},

		//BK-15873 Quitamos la funcion getEditorStyles para que la herede de basic
	};

	lookwide_demoStyle.prototype = _.extend({}, new blink.theme.styles.basic(), lookwide_demoStyle.prototype);

	blink.theme.styles.lookwide_demo = lookwide_demoStyle;

})( blink );
