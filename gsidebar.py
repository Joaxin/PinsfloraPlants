import os 
def docsify_sidebar(dest_path = "docs"):
    with open('_sidebar.md', 'w',encoding="utf-8") as f:
        ## default header contents
        header = "* [Home](/)\n"
        f.write(header)
        path = os.path.join(os.getcwd(),dest_path)
        print("Creating _sidebar.md from " + path)
        
        for root, subfolders, filenames in os.walk(path): 
            ## Count the filesystem level
            level = root.replace(path, '').count(os.sep) ## "\\" on windows "/" on Unix
            ## omit the /docs level
            if level:
                indent = '\t'*(level -1)
                subpath = os.path.relpath(root, path)
                fodername = os.path.basename(root).upper()
                if os.path.exists(os.path.join(root,'.pathignore')):
                	## omit .pathignore, not included, not recursive
                	### e.g. relative image path
                	continue
                if not os.path.exists(os.path.join(root,'README.md')):
                    print("Creating " + os.path.join(fodername,subpath,"README.md") + "...")
                    with open(os.path.join(root,'README.md'), 'w',encoding="utf-8") as re:
                        re.write("## " + fodername)
                print(indent + f"* [{fodername}]({dest_path}\\{subpath}\\README.md)") 
                f.write(indent + f"* [{fodername}]({dest_path}\\{subpath}\\README.md)\n")
                
                for filename in filenames:
                    if filename not in ['README.md']:
                    	## not an image file
                    	if os.path.splitext(filename)[-1].lower() not in [".jpg",".png"]:
	                        fname = os.path.splitext(filename)[0].upper()
	                        filename = filename.replace(" ", "%20")
	                        print('\t'*level + f"* [{fname}]({dest_path}\\{subpath}\\{filename})") 
	                        f.write('\t'*level + f"* [{fname}]({dest_path}\\{subpath}\\{filename})\n") 


docsify_sidebar()