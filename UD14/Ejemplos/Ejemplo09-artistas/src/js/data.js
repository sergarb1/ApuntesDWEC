module.exports = {
	datosJSON: {
		// JSON Que describe los artistas y sus discos
		artistas: [
			{
				id: 1,
				imagen: 'img/artistas/tool.png',
				nombre: 'Tool',
				descripcion: `
					Tool es una banda estadounidense de rock surgida en 1990 en Los Ángeles,
					California. Ha vendido más de trece millones de discos en todo el mundo
					y ha ganado tres premios Grammy hasta la fecha; ha encabezado giras y
					prestigiosos festivales y ha producido exitosos álbumes que alcanzaron
					grandes niveles de ventas gracias a su estatus de culto en el mundo de
					la música.​ Está formada por el baterista Danny Carey, el guitarrista
					Adam Jones, el vocalista Maynard James Keenan y el bajista Justin
					Chancellor, que sustituyó a Paul D'Amour en 1995.
			`,
				discos: [
					{
						disco: 1,
						nombre: 'Undertow',
						lanzamiento: 1993,
						portada: 'img/discos/tool/undertow.jpg',
						canciones: [
							{
								id: 1,
								nombre: 'Intolerance',
								duracion: '04:54'
							},
							{
								id: 2,
								nombre: 'Prison Sex',
								duracion: '04:56'
							},
							{
								id: 3,
								nombre: 'Sober',
								duracion: '05:06'
							},
							{
								id: 4,
								nombre: 'Bottom',
								duracion: '07:14'
							},
							{
								id: 5,
								nombre: 'Crawl Away',
								duracion: '05:20'
							},
							{
								id: 6,
								nombre: 'Swamp Song',
								duracion: '05:31'
							},
							{
								id: 7,
								nombre: 'Undertow',
								duracion: '05:22'
							},
							{
								id: 8,
								nombre: '4°',
								duracion: '06:03'
							},
							{
								id: 9,
								nombre: 'Flood',
								duracion: '07:45'
							},
							{
								id: 10,
								nombre: 'Disgustipated',
								duracion: '15:47'
							}
						]
					},
					{
						id: 2,
						nombre: 'Ænima',
						lanzamiento: 1996,
						portada: 'img/discos/tool/aenima.jpg',
						canciones: []
					},
					{
						id: 3,
						nombre: 'Lateralus',
						lanzamiento: 2001,
						portada: 'img/discos/tool/lateralus.jpg',
						canciones: [
							{
								id: 1,
								nombre: 'The Grudge',
							},
							{
								id: 2,
								nombre: 'Eon Blue Apocalypse'
							},
							{
								id: 3,
								nombre: 'The Patient',
								duracion: '07:13'
							},
							{
								id: 4,
								nombre: 'Mantra'
							},
							{
								id: 5,
								nombre: 'Schism'
							},
							{
								id: 6,
								nombre: 'Parabol'
							},
							{
								id: 7,
								nombre: 'Parabola'
							},
							{
								id: 8,
								nombre: 'Ticks & Leeches'
							},
							{
								id: 9,
								nombre: 'Lateralus'
							},
							{
								id: 10,
								nombre: 'Disposition'
							},
							{
								id: 11,
								nombre: 'Reflection'
							},
							{
								id: 12,
								nombre: 'Triad'
							},
							{
								id: 13,
								nombre: 'Faaip de Oiad'
							}
						]
					},
					{
						id: 4,
						nombre: '10.000 Days',
						lanzamiento: 2006,
						portada: 'img/discos/tool/10kdays.jpg',
						canciones: [
							{ id: 1 },
							{ id: 2, nombre: 'Jambi' },
							{ id: 3 },
							{ id: 4, duracion: '11:13' },
							{ id: 5, nombre: 'The Pot' },
							{ id: 6 },
							{ id: 7 },
							{ id: 8 },
							{ id: 9 },
							{ id: 10, nombre: 'Right In Two', duracion: '08:55' },
							{ id: 11 }
						]
					}
				]
			},
			{
				id: 2,
				imagen: 'img/artistas/mm.jpg',
				nombre: 'Marilyn Manson',
				descripcion: `
				Marilyn Manson es una banda estadounidense de metal industrial/alternativo formada en el año
				1989 por el cantante Marilyn Manson —nacido Brian Hugh Warner— y el guitarrista Scott Putesky.
				Debido a varios cambios en su alineación, actualmente Manson es el único miembro original que
				resta en la banda.​ A lo largo de los años se ha visto rodeada de controversia por su fuerte
				oposición a organizaciones religiosas, las referencias en sus letras hacia el sexo, la violencia
				y las drogas, así como también por sus frecuentes transformaciones estéticas y elaboradas
				puestas escénicas.
			`,
				discos: [
					{
						id: 1,
						nombre: 'Portrait of an American Family',
						lanzamiento: 1994,
						portada: 'img/discos/mm/portrait-of-an-american-family.jpg',
						canciones: [
							{
								id: 1,
								nombre: 'Prelude (The Family Trip)',
								duracion: '01:20'
							},
							{
								id: 2,
								nombre: 'Cake and Sodomy',
								duracion: '03:46'
							},
							{
								id: 3,
								nombre: 'Lunchbox',
								duracion: '04:32'
							},
							{
								id: 4,
								nombre: 'Organ Grinder',
								duracion: '04:22'
							},
							{
								id: 5,
								nombre: 'Cyclops',
								duracion: '03:32'
							},
							{
								id: 6,
								nombre: 'Dope Hat',
								duracion: '04:21'
							},
							{
								id: 7,
								nombre: 'Get Your Gunn',
								duracion: '03:18'
							},
							{
								id: 8,
								nombre: 'Wrapped in Plastic',
								duracion: '05:35'
							},
							{
								id: 9,
								nombre: 'Dogma',
								duracion: '03:22'
							},
							{
								id: 10,
								nombre: 'Sweet Tooth',
								duracion: '05:03'
							},
							{
								id: 11,
								nombre: 'Snake Eyes and Sissies',
								duracion: '04:07'
							},
							{
								id: 12,
								nombre: 'My Monkey',
								duracion: '04:31'
							},
							{
								id: 13,
								nombre: 'Misery Machine',
								duracion: '13:12'
							},
							{
								id: 14,
								nombre: 'Down In The Park (Bonus Track En Argentina) 15​)',
								duracion: '05:01'
							},
							{
								id: 15,
								nombre: 'Brown Bag (Bonus Track En Argentina)',
								duracion: '06:01'
							}
						]
					},
					{
						id: 2,
						nombre: 'Antichrist Superstar',
						lanzamiento: 1996,
						portada: 'img/discos/mm/antichrist-superstar.png',
						canciones: [

						]
					}
				]
			},
			{
				id: 3,
				imagen: 'img/artistas/peach-gb.jpg',
				nombre: 'Peach',
				descripcion: '',
				discos: []
			},
			{
				id: 4,
				imagen: 'img/artistas/thc.jpg',
				nombre: 'Texas Hippie Coalition',
				descripcion: `
				Texas Hippie Coalition (también conocido como THC) es una banda de
				rock y heavy metal procedente de Denison, Texas.
			`,
				discos: []
			}
		]
	}
};