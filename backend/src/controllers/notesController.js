import Note from '../models/Note.js';

/**
 * @desc    Get all notes
 * @route   GET /api/notes
 */
export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Sort by creation date, newest first
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({
      message: "Error fetching notes",
      error: error.message
    });
  }
}

/**
 * @desc    Get a single note by ID
 * @route   GET /api/notes/:id
 */
export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    res.status(500).json({
      message: "Error fetching note by ID",
      error: error.message
    });
  }
}

/**
 * @desc    Create a new note
 * @route   POST /api/notes
 */
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const note = new Note({ title, content });
    const savedNote = await note.save();

    res.status(201).json({
      message: "Note created successfully",
      note: savedNote
    });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({
      message: "Error creating note",
      error: error.message
    });
  }
}

/**
 * @desc    Update an existing note
 * @route   PUT /api/notes/:id
 */
export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({
      message: "Note updated successfully",
      note: updatedNote
    });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({
      message: "Error updating note",
      error: error.message
    });
  }
}

/**
 * @desc    Delete a note
 * @route   DELETE /api/notes/:id
 */
export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({
      message: "Error deleting note",
      error: error.message
    });
  }
}
