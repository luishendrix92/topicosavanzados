CREATE DATABASE Libreria

USE Libreria

CREATE TABLE Libro (
  id_libro  int           PRIMARY KEY,
  titulo    varchar(100)  NOT NULL,
  autor     varchar(100)  NOT NULL,
  precio    money         NOT NULL
)

CREATE TABLE Vendedor (
  id_vendedor  int           PRIMARY KEY,
  nombre       varchar(100)  NOT NULL,
  correo       varchar(100)
)

CREATE TABLE Factura (
  folio        int   PRIMARY KEY,
  fecha        date  DEFAULT      GETDATE(),
  id_vendedor  int   FOREIGN KEY  REFERENCES Vendedor(id_vendedor)
)

CREATE TABLE Venta (
  folio        int  NOT NULL,
  id_libro     int  NOT NULL,
  cantidad     int  NOT NULL
  PRIMARY KEY (folio, id_libro),
  FOREIGN KEY (folio)     REFERENCES Factura(folio),
  FOREIGN KEY (id_libro)  REFERENCES Libro(id_libro)
)

INSERT INTO Libro VALUES
	(1, 'Base de datos',         'James',    489),
	(2, 'SQL Server',            'Jones',    690),
	(3, 'Empezando a Programar', 'Manrique', 490),
	(4, 'Visual Basic',          'Ron',      350),
	(5, 'Java',                  'Scott',    499),
	(6, 'HTML',                  'Pérez',    640)

INSERT INTO Vendedor VALUES
	(100, 'López',  'lop@gmail.com'),
	(101, 'Flores', 'fl@yahoo.com'),
	(102, 'Ramos',  'ram@hotmail.com'),
	(103, 'Pérez',  'per@gmail.com')

INSERT INTO Factura VALUES
	(1001, '15/10/14', 100),
	(1002, '16/01/15', 102),
	(1003, '19/02/15', 101),
	(1004, '15/03/15', 101),
	(1005, '19/03/15', 100),
	(1007, '24/03/15', 102),
	(1008, '14/04/15', 103),
	(1012, '17/04/15', 103),
	(1013, '15/05/15', 102)

INSERT INTO Venta VALUES
	(1001, 1, 10),
	(1002, 2, 100),
	(1002, 3, 50),
	(1003, 3, 20),
	(1003, 4, 3),
	(1004, 5, 40),
	(1005, 1, 15),
	(1007, 3, 80),
	(1008, 4, 120),
	(1008, 3, 150),
	(1012, 3, 250),
	(1012, 2, 130),
	(1012, 1, 250),
	(1013, 3, 400)

SELECT *, precio * 0.75 AS con_descuento FROM Libro

SELECT * FROM Factura WHERE id_vendedor = (
  SELECT id_vendedor FROM Vendedor WHERE nombre = 'Ramos'
)

SELECT * FROM Libro ORDER BY autor;

SELECT * FROM Venta WHERE id_libro = (
  SELECT id_libro FROM Libro WHERE titulo = 'Base de datos'
)

SELECT * FROM Libro WHERE precio < (
  SELECT AVG(precio) FROM Libro
)

SELECT * FROM Libro WHERE precio > (
  SELECT AVG(precio) FROM Libro
)

SELECT * FROM Vendedor WHERE id_vendedor = (
  SELECT id_vendedor FROM Factura WHERE folio = (
    SELECT folio FROM Venta WHERE cantidad = (
	  SELECT MAX(cantidad) FROM Venta
	)
  )
)

SELECT id_libro, SUM(cantidad) as total_cantidad FROM Venta GROUP BY id_libro

SELECT * FROM Vendedor WHERE id_vendedor IN (
  SELECT id_vendedor FROM Factura WHERE folio IN (
    SELECT folio FROM Venta WHERE id_libro = (
	  SELECT id_libro FROM Libro WHERE titulo = 'SQL Server'
	)
  )
)

-- Aternativa con INNER JOIN
-------------------------------------------------------------------
-- SELECT Vendedor.* FROM Vendedor
-- INNER JOIN Factura ON Vendedor.id_vendedor = Factura.id_vendedor
-- INNER JOIN Venta ON Factura.folio = Venta.folio
-- INNER JOIN Libro ON Venta.id_libro = Libro.id_libro
-- WHERE Libro.titulo = 'SQL Server'
