package ru.coursework.flightSearchSystem.contollers;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.coursework.flightSearchSystem.dto.PersonDTO;
import ru.coursework.flightSearchSystem.entities.Person;
import ru.coursework.flightSearchSystem.services.PersonService;
import ru.coursework.flightSearchSystem.util.PersonMapper;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class PersonController {

    private final PersonService personService;
    private final PersonMapper personMapper = PersonMapper.INSTANCE;;

    /**
     *
     * @return список всех пользователей
     */
    @GetMapping("/people")
    public List<PersonDTO> findAll() {
        return personService.findAll().stream()
                .map(personMapper::personToPersonDTO).collect(Collectors.toList());
    }

}
