-- Inserts para la tabla 'modulos' con descripciones
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
