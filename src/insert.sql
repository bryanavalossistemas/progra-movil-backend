-- Inserts para la tabla 'modulos' con descripciones
INSERT INTO Genero (id, nombre) VALUES (1, 'Masculino');
INSERT INTO Genero (id, nombre) VALUES (2, 'Femenino');

INSERT INTO modulos (id, nombre, descripcion) 
VALUES (1, 'Aritmética', 'Estudio de las operaciones básicas con números.');

INSERT INTO modulos (id, nombre, descripcion) 
VALUES (2, 'Geometria', 'Estudio de figuras, formas y sus propiedades espaciales.');

INSERT INTO modulos (id, nombre, descripcion) 
VALUES (3, 'Algebra', 'Rama de las matemáticas que utiliza símbolos para representar números y relaciones.');

INSERT INTO modulos (id, nombre, descripcion) 
VALUES (4, 'Trigonometia', 'Estudio de los ángulos y las funciones trigonométricas en los triángulos.');


INSERT INTO secciones (id, nombre, id_modulo) VALUES (1, 'Aprende a sumar', 1);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (2, 'Aprende a restar', 1);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (3, 'Aprende a multiplicar', 1);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (4, 'Aprende a dividir', 1);

INSERT INTO secciones (id, nombre, id_modulo) VALUES (5, 'Aprende sobre perímetro', 2);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (6, 'Aprende sobre área', 2);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (7, 'Aprende sobre figuras planas', 2);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (8, 'Aprende sobre figuras tridimensionales', 2);

INSERT INTO secciones (id, nombre, id_modulo) VALUES (9, 'Aprende sobre expresiones algebraicas', 3);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (10, 'Aprende a resolver ecuaciones', 3);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (11, 'Aprende a usar variables', 3);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (12, 'Aprende factorización', 3);

INSERT INTO secciones (id, nombre, id_modulo) VALUES (13, 'Aprende sobre ángulos', 4);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (14, 'Aprende razones trigonométricas', 4);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (15, 'Aprende identidades trigonométricas', 4);
INSERT INTO secciones (id, nombre, id_modulo) VALUES (16, 'Aprende a resolver triángulos', 4);


-- Inserts para la tabla niveles
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (1, '1', 'Nivel 1 de la sección 1', 1);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (2, '2', 'Nivel 2 de la sección 1', 1);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (3, '3', 'Nivel 3 de la sección 1', 1);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (4, '4', 'Nivel 4 de la sección 1', 1);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (5, '5', 'Nivel 5 de la sección 1', 1);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (6, '1', 'Nivel 1 de la sección 2', 2);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (7, '2', 'Nivel 2 de la sección 2', 2);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (8, '3', 'Nivel 3 de la sección 2', 2);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (9, '4', 'Nivel 4 de la sección 2', 2);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (10, '5', 'Nivel 5 de la sección 2', 2);
-- ... continúa con la misma estructura hasta el nivel 80
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (11, '1', 'Nivel 1 de la sección 3', 3);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (12, '2', 'Nivel 2 de la sección 3', 3);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (13, '3', 'Nivel 3 de la sección 3', 3);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (14, '4', 'Nivel 4 de la sección 3', 3);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (15, '5', 'Nivel 5 de la sección 3', 3);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (16, '1', 'Nivel 1 de la sección 4', 4);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (17, '2', 'Nivel 2 de la sección 4', 4);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (18, '3', 'Nivel 3 de la sección 4', 4);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (19, '4', 'Nivel 4 de la sección 4', 4);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (20, '5', 'Nivel 5 de la sección 4', 4);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (21, '1', 'Nivel 1 de la sección 5', 5);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (22, '2', 'Nivel 2 de la sección 5', 5);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (23, '3', 'Nivel 3 de la sección 5', 5);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (24, '4', 'Nivel 4 de la sección 5', 5);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (25, '5', 'Nivel 5 de la sección 5', 5);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (26, '1', 'Nivel 1 de la sección 6', 6);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (27, '2', 'Nivel 2 de la sección 6', 6);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (28, '3', 'Nivel 3 de la sección 6', 6);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (29, '4', 'Nivel 4 de la sección 6', 6);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (30, '5', 'Nivel 5 de la sección 6', 6);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (31, '1', 'Nivel 1 de la sección 7', 7);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (32, '2', 'Nivel 2 de la sección 7', 7);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (33, '3', 'Nivel 3 de la sección 7', 7);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (34, '4', 'Nivel 4 de la sección 7', 7);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (35, '5', 'Nivel 5 de la sección 7', 7);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (36, '1', 'Nivel 1 de la sección 8', 8);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (37, '2', 'Nivel 2 de la sección 8', 8);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (38, '3', 'Nivel 3 de la sección 8', 8);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (39, '4', 'Nivel 4 de la sección 8', 8);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (40, '5', 'Nivel 5 de la sección 8', 8);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (41, '1', 'Nivel 1 de la sección 9', 9);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (42, '2', 'Nivel 2 de la sección 9', 9);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (43, '3', 'Nivel 3 de la sección 9', 9);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (44, '4', 'Nivel 4 de la sección 9', 9);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (45, '5', 'Nivel 5 de la sección 9', 9);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (46, '1', 'Nivel 1 de la sección 10', 10);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (47, '2', 'Nivel 2 de la sección 10', 10);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (48, '3', 'Nivel 3 de la sección 10', 10);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (49, '4', 'Nivel 4 de la sección 10', 10);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (50, '5', 'Nivel 5 de la sección 10', 10);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (51, '1', 'Nivel 1 de la sección 11', 11);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (52, '2', 'Nivel 2 de la sección 11', 11);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (53, '3', 'Nivel 3 de la sección 11', 11);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (54, '4', 'Nivel 4 de la sección 11', 11);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (55, '5', 'Nivel 5 de la sección 11', 11);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (56, '1', 'Nivel 1 de la sección 12', 12);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (57, '2', 'Nivel 2 de la sección 12', 12);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (58, '3', 'Nivel 3 de la sección 12', 12);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (59, '4', 'Nivel 4 de la sección 12', 12);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (60, '5', 'Nivel 5 de la sección 12', 12);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (61, '1', 'Nivel 1 de la sección 13', 13);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (62, '2', 'Nivel 2 de la sección 13', 13);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (63, '3', 'Nivel 3 de la sección 13', 13);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (64, '4', 'Nivel 4 de la sección 13', 13);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (65, '5', 'Nivel 5 de la sección 13', 13);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (66, '1', 'Nivel 1 de la sección 14', 14);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (67, '2', 'Nivel 2 de la sección 14', 14);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (68, '3', 'Nivel 3 de la sección 14', 14);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (69, '4', 'Nivel 4 de la sección 14', 14);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (70, '5', 'Nivel 5 de la sección 14', 14);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (71, '1', 'Nivel 1 de la sección 15', 15);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (72, '2', 'Nivel 2 de la sección 15', 15);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (73, '3', 'Nivel 3 de la sección 15', 15);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (74, '4', 'Nivel 4 de la sección 15', 15);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (75, '5', 'Nivel 5 de la sección 15', 15);

INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (76, '1', 'Nivel 1 de la sección 16', 16);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (77, '2', 'Nivel 2 de la sección 16', 16);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (78, '3', 'Nivel 3 de la sección 16', 16);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (79, '4', 'Nivel 4 de la sección 16', 16);
INSERT INTO niveles (id, numero, descripcion, id_seccion) VALUES (80, '5', 'Nivel 5 de la sección 16', 16);

INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (1, '¿Cuánto es 9 + 13?', 1);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (2, '¿Cuánto es 15 + 18?', 1);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (3, '¿Cuánto es 12 + 8?', 1);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (4, '¿Cuánto es 16 + 9?', 1);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (5, '¿Cuánto es 7 + 11?', 1);

INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (6, '¿Cuánto es 5 + 16?', 2);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (7, '¿Cuánto es 20 + 7?', 2);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (8, '¿Cuánto es 6 + 19?', 2);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (9, '¿Cuánto es 13 + 10?', 2);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (10, '¿Cuánto es 11 + 6?', 2);

INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (11, '¿Cuánto es 4 + 18?', 3);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (12, '¿Cuánto es 2 + 9?', 3);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (13, '¿Cuánto es 8 + 15?', 3);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (14, '¿Cuánto es 17 + 3?', 3);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (15, '¿Cuánto es 6 + 12?', 3);

-- Preguntas para nivel 4
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (16, '¿Cuánto es 10 + 10?', 4);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (17, '¿Cuánto es 7 + 14?', 4);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (18, '¿Cuánto es 11 + 11?', 4);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (19, '¿Cuánto es 9 + 5?', 4);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (20, '¿Cuánto es 14 + 6?', 4);

-- Preguntas para nivel 5
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (21, '¿Cuánto es 3 + 13?', 5);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (22, '¿Cuánto es 15 + 4?', 5);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (23, '¿Cuánto es 10 + 8?', 5);
INSERT INTO preguntas(id, pregunta, id_nivel) VALUES (24, '¿Cuánto es 13 + 2?', 5);
INSERT INTO preguntas (id, pregunta, id_nivel) VALUES (25, '¿Cuánto es 19 + 1?', 5);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (1, '19', false, 1);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (2, '24', false, 1);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (3, '21', false, 1);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (4, '22', true, 1);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (5, '32', false, 2);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (6, '35', false, 2);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (7, '33', true, 2);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (8, '31', false, 2);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (9, '19', false, 3);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (10, '23', false, 3);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (11, '17', false, 3);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (12, '20', true, 3);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (13, '28', false, 4);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (14, '27', false, 4);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (15, '25', true, 4);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (16, '24', false, 4);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (17, '19', false, 5);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (18, '18', true, 5);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (19, '20', false, 5);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (20, '21', false, 5);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (21, '31', false, 6);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (22, '29', false, 6);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (23, '30', true, 6);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (24, '32', false, 6);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (25, '30', false, 7);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (26, '35', false, 7);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (27, '32', true, 7);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (28, '29', false, 7);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (29, '23', false, 8);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (30, '17', false, 8);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (31, '20', true, 8);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (32, '18', false, 8);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (33, '8', false, 9);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (34, '9', false, 9);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (35, '13', false, 9);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (36, '11', true, 9);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (37, '17', true, 10);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (38, '15', false, 10);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (39, '20', false, 10);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (40, '19', false, 10);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (41, '5', 0, 11);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (42, '10', 0, 11);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (43, '7', 1, 11);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (44, '8', 0, 11);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (45, '15', 0, 12);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (46, '21', 0, 12);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (47, '18', 1, 12);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (48, '16', 0, 12);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (49, '25', 0, 13);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (50, '19', 0, 13);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (51, '20', 0, 13);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (52, '22', 1, 13);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (53, '29', 0, 14);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (54, '30', 0, 14);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (55, '27', 1, 14);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (56, '25', 0, 14);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (57, '23', 1, 15);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (58, '26', 0, 15);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (59, '22', 0, 15);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (60, '25', 0, 15);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (61, '16', 0, 16);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (62, '15', 1, 16);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (63, '17', 0, 16);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (64, '18', 0, 16);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (65, '22', 1, 17);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (66, '20', 0, 17);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (67, '21', 0, 17);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (68, '23', 0, 17);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (69, '25', 1, 18);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (70, '28', 0, 18);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (71, '26', 0, 18);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (72, '23', 0, 18);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (73, '21', 1, 19);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (74, '24', 0, 19);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (75, '20', 0, 19);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (76, '18', 0, 19);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (77, '16', 0, 20);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (78, '21', 0, 20);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (79, '22', 0, 20);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (80, '19', 1, 20);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (81, '12', 0, 21);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (82, '7', 0, 21);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (83, '13', 0, 21);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (84, '10', 1, 21);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (85, '24', 1, 22);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (86, '27', 0, 22);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (87, '23', 0, 22);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (88, '25', 0, 22);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (89, '23', 0, 23);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (90, '22', 0, 23);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (91, '20', 1, 23);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (92, '18', 0, 23);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (93, '8', 0, 24);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (94, '9', 0, 24);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (95, '6', 1, 24);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (96, '7', 0, 24);

INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (97, '12', 0, 25);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (98, '10', 1, 25);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (99, '13', 0, 25);
INSERT INTO respuestas (id, respuesta, correcta, id_pregunta) VALUES (100, '7', 0, 25);

INSERT INTO usuario (id, usuario, correo, contrasenia, edad, vidas, experiencia, nivel_experiencia, confirmed, id_genero) VALUES
(1, 'rasecml', 'rasec@gmail.com', '1234', 21, 3, 0, 1, 0, 1),
(2, 'bryanloa', 'bryan@gmail.com', 'abcdefg2345678', 21, 3, 30, 0, 0, 1),
(3, 'dmitri', 'dmitri@gmail.com', 'abcdefg3456789', 21, 3, 0, 0, 0, 1),
(4, 'javier', 'javier@gmail.com', 'abcdefg4567890', 21, 3, 300, 0, 0, 1),
(5, 'usuarioXD', 'javier@gmail.com', 'abcdefg4567890', 21, 3, 50, 0, 0, 1);

INSERT INTO tipos (id, nombre) VALUES (1, 'medalla');
INSERT INTO tipos (id, nombre) VALUES (2, 'logro');

INSERT INTO Insignias (id, nombre, imagen, descripcion, id_tipo) VALUES
(1, 'Suma completada', 'insignias/medalla1.png', 'Completaste un nivel de sumas.', 1),
(2, 'Resta completada', 'insignias/medalla2.png', 'Completaste un nivel de restas.', 1),
(3, 'Multiplicación completada', 'insignias/medalla3.png', 'Completaste un nivel de multiplicaciones.', 1),
(4, 'División completada', 'insignias/medalla4.png', 'Completaste un nivel de divisiones.', 1),
(5, 'Área de figura completada', 'insignias/medalla5.png', 'Completaste un nivel de áreas de figuras.', 1),
(6, 'Primer nivel completado', 'insignias/logro1.png', 'Completaste tu primer nivel con éxito.', 2),
(7, 'Nivel sin errores', 'insignias/logro2.png', 'Completaste un nivel sin errores.', 2),
(8, 'Persistente', 'insignias/logro3.png', 'Completaste todos los niveles de la sección.', 2);

-- Usuario 1 en nivel 1: Completado sin errores en poco tiempo (debería ganar insignias 6, 7 y 8)
INSERT INTO usuario_progresos (id_usuario, id_nivel, completado, intentos, aciertos, errores, tiempo)
VALUES (1, 2, 1, 1, 5, 0, 45);

-- Usuario 2 en nivel 1: Completado con errores (solo podría ganar la 6 si completó)
INSERT INTO usuario_progresos (id_usuario, id_nivel, completado, intentos, aciertos, errores, tiempo)
VALUES (1, 2, 1, 2, 5, 2, 80);

-- Usuario 3 en nivel 1: No completó el nivel (no gana nada)
INSERT INTO usuario_progresos (id_usuario, id_nivel, completado, intentos, aciertos, errores, tiempo)
VALUES (1, 2, 1, 1, 2, 3, 100);

-- Usuario 4 en nivel 2: Completado sin errores pero lento (gana 6 y 7)
INSERT INTO usuario_progresos (id_usuario, id_nivel, completado, intentos, aciertos, errores, tiempo)
VALUES (1, 2, 1, 1, 6, 0, 75);

-- Usuario 5 en nivel 3: Completado en tiempo récord pero con errores (solo gana 6)
INSERT INTO usuario_progresos (id_usuario, id_nivel, completado, intentos, aciertos, errores, tiempo)
VALUES (1, 2, 1, 1, 6, 1, 30);


INSERT INTO Insignia_niveles (id_nivel, id_insignia) VALUES
(1, 1),  -- Nivel 1 → Insignia 1
(2, 2),  -- Nivel 2 → Insignia 2
(3, 3),  -- Nivel 3 → Insignia 3
(4, 4);  -- Nivel 4 → Insignia 4