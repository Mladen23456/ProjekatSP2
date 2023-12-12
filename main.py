from fastapi import FastAPI,HTTPException 
from models import Item

app=FastAPI()
items=[]
@app.get("/")
def read_root():
    return{"hello":"world"}

@app.post("/items/")
def create_item(item:Item):
    items.append(item)
    return item.id

@app.get("/items/")
def read_all_items():
    return items

@app.get("/items/{item_id}")
def read_item(item_id:int):
    for item in items:
        if item_id == item_id:
            return item
    raise HTTPException(status_code=404,detail="item nit diunt")

@app.put("/items/{item_id}")
def update_item(item_id:int,item:Item):
    for idx, existing_item in enumerate(item):
         if existing_item.id==item_id:
            items[idx]=item
            return item
    raise HTTPException(status_code=404,detail="item nit found")

@app.delete("/items/{item_id}")
def delete_item(item_id:int):
    for idx, existing_item in enumerate(items):
        if existing_item.id == item_id:
            del items[idx]
            return{"message":"item deleted"}
    raise HTTPException(status_code=404,detail="item not found")