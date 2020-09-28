package com.example.demo;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/calcados")
@CrossOrigin(origins = "*")
public class CalcadoController {

	@Autowired
	private CalcadoRepositorio repositorio;
	
	@PostMapping(path="/add")//CREATE
	public @ResponseBody String addCalcado(@RequestBody Calcados newCalcado) {
		repositorio.save(newCalcado);
		
		return "Agora você tem um novo cançado no estoque!";
	}
	
	@GetMapping(path="/all")//READ ALL
	public @ResponseBody Iterable<Calcados> retornaTodos() {
		return repositorio.findAll();
	}
	
	@GetMapping(path="/locate/{id}")//READ
	public @ResponseBody Optional<Calcados> retornaCalcado(@PathVariable(required = true, name="id") Integer id) {
		return repositorio.findById(id);
	}
	
	@PutMapping(path="/update/{id}")//UPDATE
	public @ResponseBody ResponseEntity<Calcados> alteraCalcado(@PathVariable(required = true, name="id") Integer id, 
			@RequestBody Calcados calcado) {
		Optional <Calcados> c = repositorio.findById(id);
		if(c.isPresent()) {
			c.get().setTitulo(calcado.getTitulo());
			c.get().setPreco(calcado.getPreco());
			c.get().setMarca(calcado.getMarca());
			return ResponseEntity.ok(repositorio.save(c.get()));
		}
		return ResponseEntity.status(404).build();
	}
	
	@DeleteMapping(path = "/delete/{id}")//DELETE
	public @ResponseBody String deleteContact(@PathVariable(required = true, name = "id") Integer id) {
		Optional<Calcados> calcado = repositorio.findById(id);
		if(calcado.isPresent()) {
			repositorio.delete(calcado.get());
			return "calcado deletado!";
		}
		return "calcado não encontrado";
	}
	
	
}
