package ru.coursework.flightSearchSystem.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.coursework.flightSearchSystem.entities.Person;
import ru.coursework.flightSearchSystem.repositories.PersonRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonService {

    private final PersonRepository personRepository;

    public List<Person> findAll() {
        return personRepository.findAll();
    }

    public Person getById(long id) {
        Optional<Person> person = personRepository.findById(id);
        return person.get();
    }

}
