var Variable = this.$el.find("#Variable").val().toUpperCase();

if(Variable.length == 0)
{
  Invalid("Variable is empty");
  return;
}

try{
  var code = loader.GetAdditionalData() + _.template($("#list_sort_code").html())({variable:"VAR_" + Variable})
  code = Normalize(code,0)
  BrowserAutomationStudio_Append("List Sort " + Variable, BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e)
{}