package com.edwardm;

import javax.script.ScriptContext;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.servlet.Servlet;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.PageContext;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.StringWriter;


public class ReactRenderTag extends SimpleTagSupport {

    public void doTag() throws JspException, IOException {
        PageContext pc = (PageContext)getJspContext();
        InputStream vendor = pc.getServletContext().getResourceAsStream("/assets/vendor.js");
        InputStream app = pc.getServletContext().getResourceAsStream("/assets/app.js");



        JspWriter out = getJspContext().getOut();
        if(app == null || vendor == null)
            out.println("No Server Side Rendering");
        else {
            try {
                ScriptEngine js = new ScriptEngineManager().getEngineByMimeType("application/javascript");
                ScriptContext context = js.getContext();
                StringWriter writer = new StringWriter();
                context.setWriter(writer);

                js.eval("global=this; window=this;isServer=true;");
                js.eval(new InputStreamReader(vendor, "UTF-8"));
                js.eval(new InputStreamReader(app, "UTF-8"));
                out.print(writer.toString().trim());
            }catch (Exception e){
                out.println(e.getMessage());
                e.printStackTrace();
            }
        }
    }

}
