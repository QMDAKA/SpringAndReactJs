package tutorial;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.sql.Connection;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String index() {

        Connection connection=null;
        return "index";
    }

}
