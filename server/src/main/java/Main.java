import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import models.HotelAPIResponseItem;
import org.apache.commons.lang3.StringUtils;
import spark.*;
import spark.template.freemarker.FreeMarkerRoute;

import java.util.HashMap;
import java.util.List;

import static spark.Spark.*;

/**
 * Created by user on 13/10/2015.
 */
public class Main {


    private static String LOCAL_PORT = "4567";

    public static void main(String[] args) {
        Spark.staticFileLocation("/public");
        String _port = System.getenv("PORT");
        if (StringUtils.isBlank(_port)) {
            _port = LOCAL_PORT;
        }
        Spark.setPort(Integer.parseInt(_port));

        get(new FreeMarkerRoute("/") {
            @Override
            public Object handle(Request request, Response response) {
                return modelAndView(new HashMap<String, Object>(), "index.ftl");
            }
        });
        get(new Route("/api/hotels") {
            @Override
            public Object handle(Request request, Response response) {
                return getHotels(request);
            }
        });
    }

    private static String getHotels(Request request) {
        try {
            HotelsAPIWrapper api = new HotelsAPIWrapper();
            List<HotelAPIResponseItem> result = api.searchHotels(request.params("text"), request.params("lang"));
            JsonObject responseJson = new JsonObject();
            JsonArray ja = new JsonArray();
            for (HotelAPIResponseItem resultItem: result) {
                ja.add(resultItem.getAsJson());
            }
            responseJson.add("hotels", ja);
            return responseJson.toString();
        } catch (Exception e){
            return "";
        }
    }
}
